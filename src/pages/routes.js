import Home from "pages/Home";
import CreatePlaylist from "./CreatePlaylist";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

const ROUTES = [
  { exact: true, path: "/", component: Home, auth: false },
  { path: "/create-playlist", component: CreatePlaylist, auth: true },
];

const Routes = () => {
  return (
    <Switch>
      {ROUTES.map((props) => {
        const Component = props.auth ? PrivateRoute : Route;
        return <Component key={props.path} {...props} />;
      })}
    </Switch>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useAppSelector((state) => !!state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default Routes;

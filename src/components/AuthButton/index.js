import Button from "components/Button";
import style from "./style.module.css";
import useService from "hooks/useService";
import { useSelector } from "react-redux";

const AuthButton = () => {
  
  const { profile } = useSelector((state) => state.auth);
  const client = useService();

  const login = () => {
    client.loginSpotify();
  };

  const logout = () => {
    client.logoutSpotify();
  };

  if (!!profile) {
    return (
      <div className={style.profile}>
        <img src={profile.img.url} alt={profile.name} />
        <p>{profile.name}</p>
        <Button onClick={logout}>📤 Logout</Button>
      </div>
    );
  }
  return <Button onClick={login}>🔐 Login</Button>;
};

export default AuthButton;

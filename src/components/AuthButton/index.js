import Button from "components/Button";
import style from "./style.module.css";
import useSpotifyApi from "hooks/useSpotifyApi";
import { useSelector } from "react-redux";
import { StyledProfile } from "./style";

const AuthButton = () => {
  const { profile } = useSelector((state) => state.auth);
  const client = useSpotifyApi();

  const login = () => {
    client.loginSpotify();
  };

  const logout = () => {
    client.logoutSpotify();
  };

  if (!!profile) {
    return (
      <StyledProfile>
        <div>
          <img src={profile.img.url} alt={profile.name} />
          <p>{profile.name}</p>
        </div>
        <Button onClick={logout}>📤 Logout</Button>
      </StyledProfile>
    );
  }
  return (
    <Button additionalStyle={style.auth_button} onClick={login}>
      🔐 Login
    </Button>
  );
};

export default AuthButton;

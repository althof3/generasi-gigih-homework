import Button from "components/Button";
import style from "./style.module.css";
import useSpotifyApi from "hooks/useSpotifyApi";
import { StyledProfile } from "./style";
import { useAppSelector } from "redux/hooks";

const AuthButton: React.FC = () => {
  const { profile } = useAppSelector((state) => state.auth);
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

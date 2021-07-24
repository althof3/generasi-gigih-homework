import Button from "components/Button";
import style from "./style.module.css";
import { fetchProfile } from "api/services";
import { logoutPopUp, loginPopUp } from "api/services";

const AuthButton = ({ authHeader, setAuthHeader, profile, setProfile }) => {
  const loginSpotify = async () => {
    try {
      const { token, type } = await loginPopUp();
      const newToken = `${type} ${token}`;
      const profile = await fetchProfile(newToken);
      setAuthHeader(newToken);
      setProfile(profile);
    } catch (error) {
      alert(error);
    }
  };

  const logoutSpotify = async () => {
    await logoutPopUp();
    setAuthHeader(null);
    setProfile(null);
  };

  if (authHeader) {
    return (
      <div className={style.profile}>
        <img src={profile?.img?.url} alt={profile?.name} />
        <p>{profile?.name}</p>
        <Button onClick={logoutSpotify}>📤 Logout</Button>
      </div>
    );
  }
  return <Button onClick={loginSpotify}>🔐 Login</Button>;
};

export default AuthButton;

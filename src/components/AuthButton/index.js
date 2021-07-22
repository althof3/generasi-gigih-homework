import Button from "components/Button";
import { useState } from "react";
import style from "./style.module.css";
import { fetchProfile } from "api/services";
import { logoutPopUp, loginPopUp } from "api/services";

const AuthButton = ({ authHeader, setAuthHeader }) => {
  const [profile, setProfile] = useState(null);

  const loginSpotify = async () => {
    const { token, type } = await loginPopUp();
    setAuthHeader(`${type} ${token}`);
    handleProfile(`${type} ${token}`);
  };

  const logoutSpotify = async () => {
    await logoutPopUp();
    setAuthHeader(null);
    setProfile(null);
  };

  const handleProfile = async (bearerToken) => {
    const profile = await fetchProfile(bearerToken);
    setProfile(profile);
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

/* eslint-disable no-restricted-globals */
import { getToken, popupCenter } from "utils";
import { loginApi, logoutApi, profileApi } from "api/endpoints";
import Button from "components/Button";
import axios from "axios";
import { useState } from "react";
import style from "./style.module.css";

const AuthButton = ({ authHeader, setAuthHeader }) => {
  const [profile, setProfile] = useState(null);

  const loginSpotify = () => {
    const opener = popupCenter(loginApi);

    let checkTokenUrl;
    const getTokenInterval = setInterval(() => {
      try {
        checkTokenUrl = opener.location.href.includes("access_token");
      } catch (error) {}

      if (checkTokenUrl) {
        const { token, type } = getToken(opener);
        setAuthHeader(`${type} ${token}`);
        fetchProfile(`${type} ${token}`);
        clearInterval(getTokenInterval);
        opener.close();
      }
    }, 100);
  };

  const logoutSpotify = () => {
    const opener = popupCenter(logoutApi);

    const logoutInterval = setInterval(() => {
      setAuthHeader(null);
      clearInterval(logoutInterval);
      setProfile(null);
      opener.close();
    }, 500);
  };

  const fetchProfile = async (bearerToken) => {
    try {
      const res = await axios.get(profileApi, {
        headers: {
          Authorization: bearerToken,
        },
      });

      const {
        display_name: name,
        images: [img],
      } = await res.data;

      setProfile({ name, img });
    } catch (error) {
      alert(error.message);
    }
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

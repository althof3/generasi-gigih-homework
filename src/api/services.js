import axios from "axios";
import {
  profileApi,
  searchTracks,
  loginApi,
  logoutApi,
  playlistApi,
  addTracksApi,
} from "api/endpoints";
import { popupCenter } from "utils";
import { getToken } from "utils";

export const fetchTracks = (query, header) => {
  const tracks = new Promise((resolve, reject) => {
    const res = axios.get(searchTracks(query), {
      headers: {
        Authorization: header,
      },
    });

    res
      .then((result) => {
        resolve(result.data.tracks.items);
      })
      .catch((err) => {
        reject("error");
      });
  });

  return tracks;
};

export const fetchProfile = (bearerToken) => {
  const profile = new Promise((resolve, reject) => {
    const res = axios.get(profileApi, {
      headers: {
        Authorization: bearerToken,
      },
    });

    res
      .then((result) => {
        const {
          display_name: name,
          images: [img],
          id,
        } = result.data;
        resolve({ id, name, img });
      })
      .catch((err) => {
        reject("error");
      });
  });

  return profile;
};

export const createPlaylist = (user_id, data, header) => {
  const newPlaylist = new Promise((resolve, reject) => {
    const res = axios.post(playlistApi(user_id), data, {
      headers: {
        Authorization: header,
      },
    });

    res
      .then((result) => {
        const { id, name, description } = result.data;
        const playlist = { id, name, description };
        resolve(playlist);
      })
      .catch((err) => {
        reject("error");
      });
  });

  return newPlaylist;
};

export const addToPlaylist = (playlist_id, tracks, header) => {
  const newPlaylist = new Promise((resolve, reject) => {
    const res = axios.post(addTracksApi(playlist_id, tracks), null, {
      headers: {
        Authorization: header,
      },
    });

    res
      .then((result) => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });

  return newPlaylist;
};

export const logoutPopUp = () => {
  const logout = new Promise((resolve) => {
    const opener = popupCenter(logoutApi);

    const logoutInterval = setInterval(() => {
      clearInterval(logoutInterval);
      opener.close();
      resolve();
    }, 500);
  });
  return logout;
};

export const loginPopUp = () => {
  const login = new Promise((resolve) => {
    const opener = popupCenter(loginApi);

    let checkTokenUrl;
    const getTokenInterval = setInterval(() => {
      try {
        checkTokenUrl = opener.location.href.includes("access_token");
      } catch (error) {}

      if (checkTokenUrl) {
        const { token, type } = getToken(opener);
        clearInterval(getTokenInterval);
        opener.close();
        resolve({ token, type });
      }
    }, 100);
  });

  return login;
};

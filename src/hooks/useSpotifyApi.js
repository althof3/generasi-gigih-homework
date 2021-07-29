import {
  fetchTracks,
  fetchProfile,
  addToPlaylist,
  createPlaylist,
  loginPopUp,
  logoutPopUp,
} from "services";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "redux/AuthSlice";
import { useHistory } from "react-router-dom";

const useSpotifyApi = () => { // ganti jdi useSpotifyApi
  const { token, profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let history = useHistory()

  const client = {
    loginSpotify: async () => {
      try {
        const { token, type } = await loginPopUp();
        const newToken = `${type} ${token}`;
        const profile = await fetchProfile(newToken);
        dispatch(login({ profile, newToken }));
        history.push('/create-playlist')
      } catch (error) {
        alert(error);
      }
    },

    logoutSpotify: async () => {
      await logoutPopUp();
      dispatch(logout());
    },

    getTracks: async (query) => {
      try {
        const tracks = await fetchTracks(query, token);
        return tracks;
      } catch (error) {
        alert(error);
      }
    },

    postPlaylist: async (reqBody, selected) => {
      try {
        const { id, name } = await createPlaylist(profile.id, reqBody, token);
        await addToPlaylist(id, selected, token);
        alert(`Tracks Added to ${name}`);
      } catch (error) {
        alert(error);
      }
    },
  };

  return client;
};

export default useSpotifyApi;

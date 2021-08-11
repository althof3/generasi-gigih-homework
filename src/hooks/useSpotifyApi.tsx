import {
  fetchTracks,
  fetchProfile,
  addToPlaylist,
  createPlaylist,
  loginPopUp,
  logoutPopUp,
} from "services";
import { login, logout } from "redux/AuthSlice";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const useSpotifyApi = () => {
  const { token, profile } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  let history = useHistory();

  const client = {
    loginSpotify: async () => {
      try {
        const { token: newToken, type } = await loginPopUp();
        const token = `${type} ${newToken}`;
        const profile = await fetchProfile(token);
        dispatch(login({ profile, token }));
        history.push("/create-playlist");
      } catch (error) {
        alert(error);
      }
    },

    logoutSpotify: async () => {
      await logoutPopUp();
      dispatch(logout());
    },

    getTracks: async (query: string) => {
      try {
        const tracks = await fetchTracks(query, token);
        return tracks;
      } catch (error) {
        alert(error);
      }
    },

    postPlaylist: async (reqBody: IPlaylistForm, selected: string[]) => {
      try {
        const { id, name } = await createPlaylist(profile?.id, reqBody, token);
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

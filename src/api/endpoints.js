export const CLIENT_ID = process.env.REACT_APP_API;
export const CLIENT_SECRET = process.env.REACT_APP_SECRET;
export const SCOPE = "playlist-modify-private";
export const BASE_URL = window.location.href;

export const loginApi = `https://accounts.spotify.com/authorize?response_type=token&show_dialog=true&client_id=${
  CLIENT_ID
}&scope=${
  encodeURIComponent(SCOPE)
}&redirect_uri=${
  encodeURIComponent(BASE_URL)
}`;

export const logoutApi = "https://www.spotify.com/logout/";

export const searchTracks = (query) =>
  `https://api.spotify.com/v1/search?q=${query}&type=track&market=ID&limit=10`;
export const profileApi = "https://api.spotify.com/v1/me";

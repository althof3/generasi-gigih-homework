import { useState } from "react";
import SearchBar from "components/SearchBar";
import TrackList from "components/TrackList";
import useSpotifyApi from "hooks/useSpotifyApi";
import { useDispatch, useSelector } from "react-redux";
import { storeTracks } from "redux/TrackSlice";

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const client = useSpotifyApi();
  const {trackList} = useSelector((state) => state.tracks);

  const handleInput = async (e) => {
    e.preventDefault();
    const tracks = await client.getTracks(search);
    dispatch(storeTracks(tracks));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>Spotify Track List</h1>

      <SearchBar
        search={search}
        handleChange={handleChange}
        handleInput={handleInput}
      />

      <TrackList tracks={trackList} />
    </>
  );
};

export default Home;

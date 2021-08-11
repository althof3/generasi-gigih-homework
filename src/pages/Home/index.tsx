import React, { useState } from "react";
import SearchBar from "components/SearchBar";
import TrackList from "components/TrackList";
import useSpotifyApi from "hooks/useSpotifyApi";
import { storeTracks } from "redux/TrackSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const client = useSpotifyApi();
  const {trackList} = useAppSelector((state) => state.tracks);

  const handleInput = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tracks = await client.getTracks(search);
    dispatch(storeTracks(tracks));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
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

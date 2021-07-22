import { useState } from "react";
import AuthButton from "components/AuthButton";
import SearchBar from "components/SearchBar";
import TrackList from "components/TrackList";

const Tracks = () => {
  const [authHeader, setAuthHeader] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);

  return (
    <>
      <h1>Create Playlist</h1>
      <AuthButton authHeader={authHeader} setAuthHeader={setAuthHeader} />
      <SearchBar authHeader={authHeader} setTracks={setTracks} />
      <TrackList
        tracks={tracks}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};

export default Tracks;

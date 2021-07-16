import "./App.css";
import Card from "./components/Card";
import data from "constants/tracks";
import TrackImage from "components/TrackImage";
import TrackTitle from "components/TrackTitle";
import TrackArtist from "components/TrackArtist";
import TrackAlbum from "components/TrackAlbum";
import Button from "components/Button";
import { trackDestruction } from "./utils";

function App() {
  const songTracks = data.map((track) => {
    const { id, title, artist, albumName, imgSrc, spotify } = trackDestruction(track);
    return (
      <Card key={id}>
        <TrackImage imageUrl={imgSrc.url} />
        <TrackTitle>{title}</TrackTitle>
        <TrackArtist>👨‍🎤 {artist.name}</TrackArtist>
        <TrackAlbum>🎶 {albumName}</TrackAlbum>
        <Button to={spotify}>▶ Play</Button>
      </Card>
    );
  });

  return (
    <div className="App">
      <h1>Create Playlist</h1>
      <div className="Card-Wrapper">{songTracks}</div>
    </div>
  );
}

export default App;


import "./App.css";
import Card from "./components/Card";
import data from "constants/single-sample";
import TrackImage from "components/TrackImage";
import TrackTitle from 'components/TrackTitle';
import TrackArtist from "components/TrackArtist";
import TrackAlbum from 'components/TrackAlbum';
import Button from 'components/Button';

function App() {
  const {
    album: {
      images: [, imgSrc],
      artists: [artist],
      name: albumName,
    },
    name: title,
  } = data;

  return (
    <div className="App">
      <h1>Create Playlist</h1>

      <div className="Card-Wrapper">
        <Card>
          <TrackImage imageUrl={imgSrc.url} />
          <TrackTitle>{title}</TrackTitle>
          <TrackArtist>{artist.name}</TrackArtist>
          <TrackAlbum>{albumName}</TrackAlbum>
          <Button>select</Button>
        </Card>
      </div>
      
    </div>
  );
}

export default App;

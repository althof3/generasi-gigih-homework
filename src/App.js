// import logo from './logo.svg';
import "./App.css";
import Card from "./components/Card";
import data from "libs/single-sample";

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
          <img src={imgSrc.url} alt="album card" />
          <p>{title}</p>
          <p>{artist.name}</p>
          <p>{albumName}</p>
          <button>select</button>
        </Card>
      </div>
      
    </div>
  );
}

export default App;

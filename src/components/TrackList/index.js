import { trackDestruction } from "utils";
import Card from "./../Card/index";
import Button from "components/Button";
import style from "./style.module.css";

const TrackList = ({ tracks }) => {
  
  const songTracks = tracks?.map((track) => {

    const { 
      id, title, 
      artist, albumName, 
      imgObj, spotify 
    } = trackDestruction(track);

    return (
      <Card key={id}>
        <img className={style.card__image} src={imgObj.url} alt={title} />
        <h3>{title}</h3>
        <p className={style.card__artist}>👨‍🎤 {artist.name}</p>
        <p className={style.card__album}>🎶 {albumName}</p>
        <Button to={spotify}>▶ Play</Button>
      </Card>
    );
  });

  return <div className={style.cardWrapper}>{songTracks}</div>;
};

export default TrackList;

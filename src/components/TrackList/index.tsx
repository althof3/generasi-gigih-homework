import { trackDetail } from "utils";
import Card from "../Card/index";
import Button from "components/Button";
import style from "./style.module.css";
import { addSelected, removeSelected } from "redux/TrackSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const TrackList: React.FC<{ tracks: any[] }> = ({ tracks }) => {
  const dispatch = useAppDispatch();
  const { selectedTracks } = useAppSelector((state) => state.tracks);

  const songTracks = tracks?.map((track) => {
    const { id, title, artist, albumName, imgObj, uri } = trackDetail(track);
    const isSelected = selectedTracks.includes(uri);
    const handleSelect = () => {
      if (isSelected) {
        dispatch(removeSelected(uri));
      } else {
        dispatch(addSelected(uri));
      }
    };

    return (
      <Card key={id}>
        <div className={style.card__detailWrapper}>
          <img className={style.card__image} src={imgObj.url} alt={title} />
          <div>
            <h3>{title}</h3>
            <p className={style.card__artist}>👨‍🎤 {artist.name}</p>
          </div>
        </div>
        <p className={style.card__album}>🎶 {albumName}</p>
        <div className={style.card__button}>
          <Button
            onClick={handleSelect}
            additionalStyle={isSelected && style.selected}
          >
            {isSelected ? "Deselect" : "Select"}
          </Button>
        </div>
      </Card>
    );
  });

  return <div className={style.cardWrapper}>{songTracks}</div>;
};

export default TrackList;

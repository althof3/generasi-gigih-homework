import Style from "./style.module.css";

const TrackImage = ({ imageUrl, ...props }) => {
  return (
    <img {...props} className={Style.Image} src={imageUrl} alt="album card" />
  );
};

export default TrackImage;

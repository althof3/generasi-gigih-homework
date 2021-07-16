import Style from './style.module.css'

const TrackAlbum = ({ children, ...props }) => {
  return <p className={Style.album} {...props}>{children}</p>;
};

export default TrackAlbum;

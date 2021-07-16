import Style from './style.module.css'

const TrackArtist = ({ children, ...props }) => {
  return <p className={Style.artistName} {...props}>{children}</p>;
};

export default TrackArtist;

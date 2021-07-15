import Style from './style.module.css'

const TrackImage = ({imageUrl}) => {
  return (
    <img className={Style.Image} src={imageUrl} alt="album card" />
  )
}

export default TrackImage

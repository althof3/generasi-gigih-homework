import AuthButton from "components/AuthButton";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Header: React.FC = () => {
  return (
    <div className={style.navbar}>
      <div className={style.nav__item}>
        <Link className={style.nav_link} to="/">Home</Link>
        <Link className={style.nav_link} to="/create-playlist">Create Playlist</Link>
      </div>
      <div className={style.nav__action}>
        <AuthButton />
      </div>
    </div>
  );
};

export default Header;

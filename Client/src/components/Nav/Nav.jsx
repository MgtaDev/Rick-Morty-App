import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png'

export default function Nav({ onSearch }) {
  return (
    <nav className={style.contenedorNav}>
      <div className={style.contenedorBoton}>
        <img className={style.Logo} src={Logo} alt="" />
        <button className={style.botonNav}>
          <NavLink to="/home" className={style.linkNav}>Home</NavLink>
        </button>

        <button className={style.botonNav}>
          <NavLink to="/about" className={style.linkNav}>About</NavLink>
        </button>

        <button className={style.botonNav}>
          <NavLink to="/favorites" className={style.linkNav}>Favorites</NavLink>
        </button>
      </div>

    <div className={style.contenedorSearch}>
      <SearchBar onSearch={onSearch} />
    </div>

    </nav>
  );
}

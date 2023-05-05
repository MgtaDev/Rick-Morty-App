import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <nav className={style.contenedorNav}>
      <div className={style.contenedorBoton}>
        <button className={style.botonNav}>
          <NavLink to="/home" className={style.linkNav}>Home</NavLink>
        </button>

        <button className={style.botonNav}>
          <NavLink to="/about" className={style.linkNav}>About</NavLink>
        </button>
      </div>

    <div className={style.contenedorSearch}>
      <SearchBar onSearch={onSearch} />
    </div>

    </nav>
  );
}

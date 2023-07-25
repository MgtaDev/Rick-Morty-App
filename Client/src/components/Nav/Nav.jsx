import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useNavigate, } from "react-router-dom";
import Logo from '../assets/Logo.png'
import exit from '../assets/logout.png'
import 'bootstrap/dist/css/bootstrap.css'

export default function Nav({ onSearch }) {
  const navigate = useNavigate()
  const goLanding = () => {
    navigate('/')
  }

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
    <img onClick={goLanding} className={style.exit} src={exit} alt="" />

    </nav>
  );
}

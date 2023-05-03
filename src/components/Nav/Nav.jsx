import style from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar"

export default function Nav ({onSearch}){
    return(
        <nav className={style.contenedorNav}>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}
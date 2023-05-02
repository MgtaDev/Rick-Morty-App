import style from '../SearchBar/SearchBAr.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div className={style.contenedorBarra}>
         {
         <>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
         </>
         }
      </div>
   );
}

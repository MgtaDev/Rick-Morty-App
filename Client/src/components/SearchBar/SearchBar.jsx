import style from './SearchBAr.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setID] = useState("");

   const handleChange = (event) => {
      setID(event.target.value)
   }

   return (
      <div className={style.contenedorBarra}>
         {
         <>
         <input type='search' onChange={handleChange} value={id}/>
         <button className={style.button} onClick={() => {onSearch(id); setID("")}}>Agregar</button>
         </>
         }
      </div>
   );
}

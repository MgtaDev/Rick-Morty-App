import style from './Card.module.css';
import {NavLink} from 'react-router-dom';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.contenedor}>
         {<>
            <button onClick={() => onClose(id)} className={style.botonClose}>X</button>
            <NavLink to={`/detail/${id}`} className={style.navLink}>
            <h3 className={style.nombre}>{name}</h3>
            </NavLink>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
            <img src={image} alt='' />
         </>
         }
      </div>
   );
};

import style from './Card.module.css';

export default function Card(props) {
   return (
      <div className={style.contenedor}>
         {<>
            <button onClick={props.onClose} className={style.botonClose}>X</button>
            <h2 className={style.nombre}>{props.name}</h2>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin}</h2>
            <img src={props.image} alt='' />
         </>
         }
      </div>
   );
}

import Card from '../Card/Card';
import style from './Cards.module.css';


export default function Cards({characters, onClose, setCharacters}) {
   return (
      <div className={style.contenedor}>
        {
            characters.length === 0
            ? <p style={{color: 'white', fontSize: '20px'}}>Add Characters here!</p>
            :''
         }
         {
            characters.map(({id, name, status, species, gender, origin, image}) => {
               return(  
                  <Card 
                     key = {id}
                     id = {id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     onClose={onClose}/>
               );
            })
         };
      </div>
   );
};

import Card from "../Card/Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { orderCards, filterCards, getAllFavorites, filterPerOrigin, filterGenderless } from "../../redux/actions";
import { useState } from "react";
import style from './Favorites.module.css'

const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();
    
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    };

    const handleFilter = (event) => {
        const value = event.target.value;
        if (value === 'AllCharacters') {
          dispatch(getAllFavorites()); // se llama a la nueva acción
        } else if(value === 'unknown') {
            dispatch(filterPerOrigin())
        } else if(value === 'Genderless') {
            dispatch(filterGenderless())
        } else {
            dispatch(filterCards(value));
        }
      };

    return (
        <div className={style.favorites}>
        
            <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select><select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                    <option value="AllCharacters">All Characters</option>
            </select>
            {
                myFavorites.length < 1
                ? <h2>No favorites...</h2>
                : ''
            }
         
            <div className={style.container}>
            {
          myFavorites?.map((fav) => {
              console.log(fav);
              return (
                  <Card
                  key={fav.id}
                  id={fav.id}
                  name={fav.name}
                  image={fav.image}
                  status={fav.status}
                  species={fav.species}
                  gender={fav.gender}
                  origin={fav.origin}
                  />
                  );
                })
            }
            </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(
    mapStateToProps,
     null
     )(Favorites);

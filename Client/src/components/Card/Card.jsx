import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { removeFav, addFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  };

  useEffect(() => {
  myFavorites.forEach((fav) => {
    if (fav.id === id) {
      setIsFav(true);
    }
  })}, [myFavorites]);

  

  return (
    <div className={style.contenedor}>
      {
        <>
         {isFav ? (
            <button className={style.fav} onClick={handleFavorite}>❤️</button>
          ) : (
            <button className={style.fav} onClick={handleFavorite}>🤍</button>
          )}
          <button onClick={() => onClose(id)} className={style.botonClose}>
            X
          </button>
          <img className={style.img} src={image} alt="" />
          <NavLink to={`/detail/${id}`} className={style.navLink}>
            <h3 className={style.nombre}>{name}</h3>
          </NavLink>
          <h2>Status: <span>{status}</span></h2>
          <h2>Species:<span>{species}</span></h2>
          <h2>Gender: <span>{gender}</span></h2>
          <h2>Origin: <span>{origin}</span></h2>
        </>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  }
};

export default connect(
  mapStateToProps,
   mapDispatchToProps
   )(Card);

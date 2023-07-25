import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_ALL, FILTER_PER_ORIGIN, FILTER_GENDERLESS } from "./action-types";
import axios from 'axios';
import swal from 'sweetalert'

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character)
         swal('SUCCESS','Added to favorites', 'success')
         if (!data.length) throw new Error('No hay favoritos')

         return dispatch({
            type: ADD_FAV,
            payload: data,
         }) 
      } catch (error) {
         swal('ERROR','Error adding to favorites', 'error')
      }
   };
};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint)
         swal('SUCCESS','Removed from favorites', 'success')
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         swal('ERROR','Error removing from favorites', 'error')
      }
   };
};

export const filterCards = (gender) => {
   return {
      type: FILTER,
      payload: gender
   }
}
export const filterGenderless = (gender) => {
   return {
      type: FILTER_GENDERLESS,
      payload: gender
   }
}
export const filterPerOrigin = (origin) => {
   return {
      type: FILTER_PER_ORIGIN,
      payload: origin
   }
}

export const orderCards = (order) => {
   return {
      type: ORDER,
      payload: order
   }
}
export const getAllFavorites = () => ({ type: GET_ALL });




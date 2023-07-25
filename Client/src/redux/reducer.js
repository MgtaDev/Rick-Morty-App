import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, GET_ALL, FILTER_PER_ORIGIN, FILTER_GENDERLESS } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                allCharacters: payload 
            };

        case REMOVE_FAV:
            return { ...state, myFavorites: payload };

        case FILTER:
            const allCharactersFilter = state.allCharacters.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites: allCharactersFilter
            }

        case ORDER:
            const allCharactersFavCopia = [...state.allCharacters]
            return {
                ...state,
                myFavorites: payload === 'A'
                    ? allCharactersFavCopia.sort((a, b) => { return a.id - b.id })
                    : allCharactersFavCopia.sort((a, b) => { return b.id - a.id })
            }
        case GET_ALL:
            return { 
                ...state, 
                myFavorites: state.allCharacters // simplemente se devuelven todos los personajes desde el inicio
            }
        case FILTER_PER_ORIGIN:
            const originUnknownChars = state.allCharacters.filter(character => character.origin === 'unknown')
            return{
                ...state,
                myFavorites: originUnknownChars

            }
            case FILTER_GENDERLESS:
            const genderlessChars = state.allCharacters.filter(character => character.gender === 'unknown')
            return{
                ...state,
                myFavorites: genderlessChars

            }
        
        default:
            return { ...state };
    }
};

export default reducer;
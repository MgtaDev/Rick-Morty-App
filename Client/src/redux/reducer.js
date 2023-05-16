import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return{...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            };
        
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            };

            case FILTER:
                const allCharactersFilter = state.allCharacters.filter(character => character.gender === payload)
                return{
                    ...state,
                    myFavorites: allCharactersFilter
                }
            
                case ORDER:
                    const allCharactersFavCopia = [...state.allCharacters]
                    return{
                        ...state,
                        myFavorites: payload === 'A'
                        ? allCharactersFavCopia.sort((a, b) => {return a.id - b.id})
                        : allCharactersFavCopia.sort((a, b) => {return b.id - a.id})
                    }
    
        default:
            return {...state};
    }
};

export default reducer;
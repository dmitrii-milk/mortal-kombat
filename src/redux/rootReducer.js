import { FETCH_CHARACTERS, SET_ACTIVE_CHARACTER } from "./type"

const initialState = {
    fetchCharacters: [],
    focusCharacter: {}
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_CHARACTERS: 
            return {...state,  fetchCharacters: action.payload}
        case SET_ACTIVE_CHARACTER: 
            return {...state,  focusCharacter: action.payload}
        default: return state
    }
        
}


export default rootReducer

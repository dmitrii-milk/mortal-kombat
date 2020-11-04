import { FETCH_CHARACTERS, SET_ACTIVE_CHARACTER} from "./type";


export function fetchCharacers() {
   return async dispatch => {
    const response = await fetch('http://localhost:3000/characters')
    const request = await response.json()
    dispatch({type: FETCH_CHARACTERS, payload: request})
    dispatch({type: SET_ACTIVE_CHARACTER, payload: request[0]})
   }

}

export function setActiveCharacter(character) {
   console.log(character);
   return {
      type: SET_ACTIVE_CHARACTER,
      payload: character
   }
}




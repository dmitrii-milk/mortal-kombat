import React, { useCallback, useEffect } from 'react';
import { fetchCharacers, setActiveCharacter} from "./../redux/action";
import { useDispatch, useSelector } from 'react-redux';
import Character from './Character';
import AutoFocus from './AutoFocus';
import { KEY_DOWN, KEY_RIGHT, KEY_UP } from '../redux/type';
import { KEY_LEFT } from "./../redux/type";


const ITEMS_IN_ROW = 5;


function CharactersDesk () {

    const dispatch = useDispatch();
    const characters = useSelector(state => state.fetchCharacters);
    const selectCharacter = useSelector(state => state.focusCharacter);

    useEffect(() => {
        dispatch(fetchCharacers())
    }, [dispatch])

    const handleSelect = useCallback(({key}) => {

        const {id} = selectCharacter;
        console.log(id)
        switch(key) {
            case KEY_UP:
                console.log(id - ITEMS_IN_ROW)
                if(id - ITEMS_IN_ROW >= 0) {
                    dispatch(setActiveCharacter(characters[+id - ITEMS_IN_ROW]))
                }
                break;
            case KEY_DOWN:
                console.log(id)
                if(id + ITEMS_IN_ROW < characters.length) {
                    dispatch(setActiveCharacter(characters[+id + 5]))
                }
                break;
            case KEY_LEFT:
                console.log(id)
                if(+id % ITEMS_IN_ROW) {
                    dispatch(setActiveCharacter(characters[+id - 1]))
                }
                break;
            case KEY_RIGHT:
                console.log(id)
                if((id + 1) % ITEMS_IN_ROW) {
                    dispatch(setActiveCharacter(characters[+id + 1]))
                }
                break;
            default: break;
        }
    }, 
    [selectCharacter, dispatch])
    
    return( 
        <AutoFocus onKeyDown={handleSelect}>
           {characters.map(char => (<Character char={char} selectCharacter={selectCharacter}  key={char.id}/>))} 
        </AutoFocus>
    )
}

export default CharactersDesk;
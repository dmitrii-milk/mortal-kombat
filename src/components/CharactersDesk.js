import React, { useCallback, useEffect, memo } from 'react';
import { fetchCharacers, setActiveCharacter} from "./../redux/action";
import { useDispatch, useSelector } from 'react-redux';


import Character from './Character';
import AutoFocus from './AutoFocus';
import { KEY_DOWN, KEY_RIGHT, KEY_UP, KEY_LEFT} from '../redux/type';


function CharactersDesk () {

    const dispatch = useDispatch();
    const characters = useSelector(state => state.fetchCharacters);
    const selectCharacter = useSelector(state => state.focusCharacter);

    useEffect(() => {
        dispatch(fetchCharacers())
    }, [dispatch])

    const handleSelect = useCallback(({key}) => {

        const {id} = selectCharacter;

        switch(key) {
            case KEY_UP:
                dispatch(setActiveCharacter(characters[+id - 5], characters[+id + 10]))
                break;
            case KEY_DOWN:
                dispatch(setActiveCharacter(characters[+id + 5], characters[+id - 10]))
                break;
            case KEY_LEFT:
                dispatch(setActiveCharacter(characters[+id - 1], characters[characters.length - 1]))
                break;
            case KEY_RIGHT:
                dispatch(setActiveCharacter(characters[+id + 1], characters[0]))
                break;
            default: break;
        }
    }, 
    [selectCharacter, characters, dispatch])
    
    return( 
        <AutoFocus onKeyDown={handleSelect}>
            <div> 
                {selectCharacter && (
                    <img src={selectCharacter.character_image} alt={selectCharacter.name}/>
                )}
            </div>
           {characters &&  characters.map(char => (<Character char={char} key={char.id}/>))} 
        </AutoFocus>
    )
}

export default memo(CharactersDesk);
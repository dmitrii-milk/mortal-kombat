import React, { useCallback, useEffect, memo } from 'react';
import { fetchCharacers, setActiveCharacter} from "./../redux/action";
import { useDispatch, useSelector } from 'react-redux';


import Characters from './Characters';
import AutoFocus from './AutoFocus';
import ActiveCharacter from './ActiveCharacter';
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
        <>
            <h1
            style={{
                color:"white",
                display: "inline-block",
                position: "relative",
                left: "35%"
            }}> SELECT YOUR FIGHTER </h1>
            <ActiveCharacter activeCharacter={selectCharacter}/>
            <AutoFocus onKeyDown={handleSelect}>
            {characters &&  characters.map(char => (<Characters char={char} key={char.id}/>))} 
            </AutoFocus>
        </>
    )
}

export default memo(CharactersDesk);
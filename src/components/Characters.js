
import React from 'react';
import '../index.css';
import { useSelector } from "react-redux";



export default ({char}) => {
    const selectCharacter = useSelector(state => state.focusCharacter);

    return (
        <div style={{width: "100px", position: "relative"}}>
           <img 
           className = {char.id === selectCharacter.id ? 'active': ''}
           src={char.icon}  
           alt={char.name}/>
        </div>
    )
}
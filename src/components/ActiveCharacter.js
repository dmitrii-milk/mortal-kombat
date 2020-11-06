import React from 'react';


export default ({activeCharacter}) => (
    <div
    style={{
        position: "absolute",
        top: "38%",
        left: "25%"
    }}>
         <img src={activeCharacter.character_image} alt={activeCharacter.name}/>
    </div>
)
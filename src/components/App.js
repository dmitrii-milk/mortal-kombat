import React from 'react';
import CharactersDesk from './CharactersDesk';
import image from '../assets/background.jpg';




function App() {


    return (
        <div
            style={{  
            width: "100%",     
            height: "100vh",
            position: "relative",
            backgroundImage: `url(${image})`
        }}> 
                 
            <CharactersDesk/>
        </div>
    )
}

export default App;
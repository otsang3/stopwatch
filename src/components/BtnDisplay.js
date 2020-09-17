import React from 'react';

function BtnDisplay(props) {
    
    return(
        <div>
            <button onClick={props.start}>START</button>
            <button>RESET</button>
        </div>
    )
}

export default BtnDisplay;
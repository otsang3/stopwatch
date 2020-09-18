import React from 'react';

function BtnDisplay(props) {
    
    return(
        <div>
            {props.status === 0 && 
            <button onClick={props.start}>START</button>
            }
            {props.status === 1 &&
                <button onClick={props.stop}>STOP</button>
            }
            {props.status === 2 &&
            <div>
                <button style={{marginRight: "0.5em"}} onClick={props.start}>RESUME</button>
                <button onClick={props.reset}>RESET</button>
            </div>
            }
        </div>
    )
}

export default BtnDisplay;
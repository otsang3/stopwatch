import React from 'react';

function BtnDisplay(props) {
    
    return(
        <div>
            {props.status === 0 && 
            <button onClick={props.start}>START</button>
            }
            {props.status === 1 &&
            <div>
                <button onClick={props.stop}>STOP</button>
                <button onClick={props.reset}>RESET</button>
            </div>
            }
            {props.status === 2 &&
            <div>
                <button onClick={props.start}>RESUME</button>
                <button onClick={props.reset}>RESET</button>
            </div>
            }
        </div>
    )
}

export default BtnDisplay;
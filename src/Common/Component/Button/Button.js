import React from 'react';
import './Button.css';

const commonButton = (props) => {

    return (
        <div>
            <button className={'CommonButton'} onClick={props.click}>
                Révéler !
            </button>
        </div>  
    )
}

export default commonButton;
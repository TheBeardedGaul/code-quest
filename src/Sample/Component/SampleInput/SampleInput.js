import React from 'react';
import './SampleInput.css';

const sampleInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} />
        </div>  
    )
}

export default sampleInput;
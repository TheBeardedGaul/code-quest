import React, { useState } from 'react';
import classNames from 'classnames';
import './LanguageButton.css';

const languageButton = (props) => {

    const [selectedState, setSelectedState] = useState({
        selected: false
    });

    const switchSelectedValueHandler = (event) => {
        setSelectedState({
            selected: !selectedState.selected
        });
    }

    const getClassNames = () => {
        const componentClasses = classNames({
            'LanguageButton': true,
            'SelectedLanguageButton': selectedState.selected
        });

        return componentClasses;
    }

    return (
        <div>
            <button className={getClassNames()}
                onClick={() => switchSelectedValueHandler()} >
                {props.name}
            </button>
        </div>  
    )
}

export default languageButton;
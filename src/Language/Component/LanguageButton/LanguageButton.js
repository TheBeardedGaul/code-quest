import React from 'react';
import classNames from 'classnames';
import './LanguageButton.css';

const languageButton = (props) => {

    const getClassNames = () => {
        const componentClasses = classNames({
            'LanguageButton': true,
            'SelectedLanguageButton': props.selected
        });

        return componentClasses;
    }

    return (
        <div>
            <button className={getClassNames()}
                onClick={() => props.click(props.index)} >
                {props.name}
            </button>
        </div>  
    )
}

export default languageButton;
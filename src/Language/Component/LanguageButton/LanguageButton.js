import React from 'react';
import classNames from 'classnames';
import './LanguageButton.css';

const languageButton = (props) => {

    const getClassNames = () => {
        const componentClasses = classNames({
            'LanguageButton': true,
            'SelectedLanguageButton': props.answer.selected
        });

        return componentClasses;
    }

    return (
        <div>
            <button className={getClassNames()}
                onClick={() => props.click(props.index)} >
                {props.answer.language.name}
            </button>
        </div>  
    )
}

export default languageButton;
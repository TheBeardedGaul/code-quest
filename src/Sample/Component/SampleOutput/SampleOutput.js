import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './SampleOutput.css';
import LanguageButton from '../../../Language/Component/LanguageButton/LanguageButton';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Language from '../../../Language/Model/Languages';

const sampleOutput = (props) => {

    const [answersState, setAnswersState] = useState({
        answers: [
            {language: Language.CSHARP, selected: false},
            {language: Language.JAVA, selected: false},
            {language: Language.JS, selected: false},
            {language: Language.JSON, selected: false},
            {language: Language.PHP, selected: false},
            {language: Language.SQL, selected: false},
            {language: Language.TS, selected: false}
        ]
    });

    const switchSelectedValueHandler = (index) => {
        const updatedAnswers = answersState.answers;
        updatedAnswers[index].selected = !answersState.answers[index].selected;
        updatedAnswers
            .filter(element => element.language.name !== answersState.answers[index].language.name)
            .forEach(element => element.selected = false);
        setAnswersState({
            answers: updatedAnswers
        });
    }

    const renderButtonList = () => {
        const buttonList = answersState.answers.map((element, index) => {
            return (
                <LanguageButton key={index}
                    index={index}
                    answer={element}
                    click={switchSelectedValueHandler}
                />
            );
        });
        return buttonList;
    };

    return (
        <div className="Sample">
            <h1>Test n°{props.index}</h1>
            <SyntaxHighlighter language={props.sample.language} style={tomorrowNightEighties} >
                {props.sample.code}
            </SyntaxHighlighter>
            <div className="ButtonContainer">
                {renderButtonList()}
            </div>
        </div>
    )
}


export default sampleOutput;
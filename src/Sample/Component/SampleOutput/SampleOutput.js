import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './SampleOutput.css';
import LanguageButton from '../../../Language/Component/LanguageButton/LanguageButton';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Language from '../../../Language/Model/Languages';
import Button from '../../../Common/Component/Button/Button';

const sampleOutput = (props) => {

    const [answersState, setAnswersState] = useState({
        answers: [
            {language: Language.CSHARP, selected: false, valid: false},
            {language: Language.JAVA, selected: false, valid: false},
            {language: Language.JS, selected: false, valid: false},
            {language: Language.JSON, selected: false, valid: false},
            {language: Language.PHP, selected: false, valid: false},
            {language: Language.SQL, selected: false, valid: false},
            {language: Language.TS, selected: false, valid: false}
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

    const revealValidAnswer = () => {
        const updatedAnswers = answersState.answers;
        updatedAnswers
            .filter(element => element.language === props.sample.language)
            .forEach(element => element.valid = true);
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
            <SyntaxHighlighter language={props.sample.language.value} style={tomorrowNightEighties} >
                {props.sample.code}
            </SyntaxHighlighter>
            <div className="ButtonContainer">
                {renderButtonList()}
            </div>
            <div className="ButtonRevealContainer">
                <Button click={() => revealValidAnswer()} />
            </div>
        </div>
    )
}


export default sampleOutput;
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './SampleOutput.css';
import LanguageButton from '../../../Language/Component/LanguageButton/LanguageButton';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const sampleOutput = (props) => {

    const [answersState, setAnswersState] = useState({
        answers: [
            {name: "C#", selected: false, value: "cs"},
            {name: "Java", selected: false, value: "java"},
            {name: "Javascript", selected: false, value: "javascript"},
            {name: "JSON", selected: false, value: "json"},
            {name: "PHP", selected: false, value: "php"},
            {name: "SQL", selected: false, value: "sql"},
            {name: "Typescript", selected: false, value: "typescript"}
        ]
    });

    const switchSelectedValueHandler = (index) => {
        const updatedAnswers = answersState.answers;
        updatedAnswers[index].selected = !answersState.answers[index].selected;
        updatedAnswers
            .filter(element => element.name !== answersState.answers[index].name)
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
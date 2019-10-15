import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './SampleOutput.css';
import LanguageButton from '../../../Language/Component/LanguageButton/LanguageButton';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const sampleOutput = (props) => {

    return (
        <div className="Sample">
            <SyntaxHighlighter language={props.sample.language} style={tomorrowNightEighties} >
                {props.sample.code}
            </SyntaxHighlighter>
            <div className="ButtonContainer">
                <LanguageButton
                    name={"Java"} />
                <LanguageButton
                    name={"Javascript"} />
                <LanguageButton
                    name={"PHP"} />
                <LanguageButton
                    name={"Typescript"} />
                <LanguageButton
                    name={"JSON"} />
            </div>
        </div>
    )
}


export default sampleOutput;
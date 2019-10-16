import React, { useState } from 'react';
import './App.css';
import SampleOutput from './Sample/Component/SampleOutput/SampleOutput';
import Language from './Language/Model/Languages';
import Csharp from './Sample/c#';
import Java from './Sample/java';
import Javascript from './Sample/javascript';
import Json from './Sample/json';
import Php from './Sample/php';
import Sql from './Sample/sql';
import Typescript from './Sample/typescript';

const app = props => {
  const [samplesState] = useState({
    samples: [
      {code: Javascript, language: Language.JS},
      {code: Typescript, language: Language.TS},
      {code: Csharp, language: Language.CSHARP},
      {code: Sql, language: Language.SQL},
      {code: Json, language: Language.JSON},
      {code: Php, language: Language.PHP},
      {code: Java, language: Language.JAVA}
    ]
  });

  const renderSampleOutput = () => {
    const sampleList = samplesState.samples.map((element, index) => {
      return (
        <SampleOutput key={index} sample={element} index={index+1} />
      );
    });
    return sampleList;
  };

  return (
    <div className="App">
        {renderSampleOutput()}
    </div>
  );
}

export default app;

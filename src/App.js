import React, { useState } from 'react';
import './App.css';
import SampleOutput from './Sample/Component/SampleOutput/SampleOutput';
import Javascript from './Sample/javascript';
import Typescript from './Sample/typescript';

const app = props => {
  const [samplesState] = useState({
    samples: [
      {code: Javascript, language: 'javascript'},
      {code: Typescript, language: 'typescript'}/*,
      {code: '', language: ''},
      {code: '', language: ''},
      {code: '', language: ''},
      {code: '', language: ''}*/
    ]
  });

  return (
    <div className="App">
      <SampleOutput
        sample={samplesState.samples[0]} />
      <SampleOutput
        sample={samplesState.samples[1]} />
      {/* <SampleOutput
        sample={samplesState.samples[2]} />
      <SampleOutput
        sample={samplesState.samples[3]} />
      <SampleOutput
        sample={samplesState.samples[4]} />
      <SampleOutput
        sample={samplesState.samples[5]} /> */}
    </div>
  );
}

export default app;

import React, { useState } from 'react';
import Display from './components/Display';
import BtnDisplay from './components/BtnDisplay';

function App() {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {

    if (updatedM === 60) {
      updatedH ++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM ++;
      updatedS =0;
    }
    if (updatedMs === 100) {
      updatedS ++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  }

  const start = () => {
    run();
    setInterval(run, 10);
  }

  return (
    <div>
      <Display time={time}/>
      <BtnDisplay start={start}/>
    </div>
  );
}

export default App;

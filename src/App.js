import React, { useState } from 'react';
import Display from './components/Display';
import BtnDisplay from './components/BtnDisplay';

function App() {

  const initialTime = {ms:0, s:0, m:0, h:0}
  const [time, setTime] = useState(initialTime);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

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
    setStatus(1)
    setInterv(setInterval(run, 10));
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv);
    setTime(initialTime)
  }

  return (
    <div>
      <Display time={time}/>
      <BtnDisplay reset={reset} start={start} status={status} stop={stop}/>
    </div>
  );
}

export default App;

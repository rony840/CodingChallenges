import styled from 'styled-components';
import React, {useState,useRef} from 'react';
const useTimer = (initialCount) => {
  const [isRunning,setIsRunning] = useState(false)
  const [count,setCount] = useState(0)
  const timerId = useRef('')
  // Write your hook logic here
  const start = () => {
    let counter = 0
    setIsRunning(true)
    timerId.current = setInterval(()=>{
      counter = counter + 1
      setCount(counter)
    },1000) 
  }
  const reset = () => {
    setIsRunning(false)
    clearInterval(timerId)
    setCount(0)
  }
  const stop = () => {
    setIsRunning(false)
    clearInterval(timerId.current)
    setCount(0)
  }
  return {start, stop, reset, isRunning, count};
};

const App = () => {
  const { start, stop, reset, isRunning, count } = useTimer(0);

  return (
    <AppWrapper>
      <h1>Timer App</h1>
      <TimerWrapper>
        <h2>Count: {count}</h2>
        <div>
          <Button onClick={start}>Start</Button>
          <Button onClick={stop}>Stop</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
      </TimerWrapper>
      <h2>{isRunning && 'Timer is active'}</h2>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  background-color: '#fff';
  color: '#333';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
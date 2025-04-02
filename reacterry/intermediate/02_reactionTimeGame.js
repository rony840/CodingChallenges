import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
function ReactionTest() {
  // Write your game here
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  const [changed, setChanged] = useState(false);
  const [clicked, setClicked] = useState(false);
  const countRef = useRef(0);
  const intIdRef = useRef('');
  const timoIdRef = useRef('');
  console.log(countRef.current)
  const handleClick = () => {
    if (countRef.current == 0) {
      setClicked(true);
      setStarted(false);
      clearTimeout(timoIdRef.current);
      clearInterval(intIdRef.current);
    } else if (countRef.current > 0) {
      setStarted(false);
      clearTimeout(timoIdRef.current);
      clearInterval(intIdRef.current);
      setTime(countRef.current);
      setClicked(true);
    }
  };
  const handleStartGame = () => {
    countRef.current = 0;
    clearTimeout(timoIdRef.current);
    clearInterval(intIdRef.current);
    setTime(0);
    setChanged(false);
    setClicked(false);
    setStarted(true);
  };
  if (started == true) {
      timoIdRef.current = setTimeout(() => {
        setChanged(true);
      }, 2000);
    }
    if (started == false) {
        clearTimeout(timoIdRef.current);
        clearInterval(intIdRef.current);
      }
    if (changed == true) {
        intIdRef.current = setInterval(() => {
          countRef.current = countRef.current + 1;
        }, 1);
      }
    if (changed == false) {
      clearInterval(intIdRef.current);
    }

  return (
    <GameContainer>
      {started ? (
        !time && !clicked ? (
          <GameElement
            style={changed ? { backgroundColor: 'green' } : {}}
            onClick={handleClick}
          />
        ) : null
      ) : (
        <StartButton onClick={handleStartGame}> Start Game </StartButton>
      )}

      {countRef.current > 0 ? (
        changed && clicked ? (
          <h1>You took {time}ms!</h1>
        ) : null
      ) : clicked ? (
        <h1>You clicked too early!</h1>
      ) : null}
    </GameContainer>
  );
}

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const StartButton = styled.button`
  height: 50px;
  width: 150px;
  background-color: black;
  color: white;
  font-size: 18px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
`;

const GameElement = styled.button`
  height: 120px;
  width: 120px;
  background-color: red;
  color: white;
  font-size: 18px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
`;

export default ReactionTest;


/* Correct Solution 

import React, { useRef, useState } from 'react';
import styled from 'styled-components';

function ReactionTest() {
  const [startTime, setStartTime] = useState(null);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [countdownRunning, setCountdownRunning] = useState(false)
  const [message, setMessage] = useState(null)
  const timerRef = useRef(null);

  const startGame = () => {
    setMessage(null)
    setCountdownRunning(true)

    timerRef.current = setTimeout(() => {
      setCountdownRunning(false)
      setCountdownFinished(true);
      setStartTime(Date.now());
    }, Math.random() * 5000 + 1000);
  };

  const handleClick = () => {
    setMessage(`You took ${Date.now() - startTime}ms!`)
    setCountdownFinished(false);
    setStartTime(null);
  };

  const handleEarlyClick = () => {
    setMessage('You clicked too early!')
    setCountdownFinished(false);
    setCountdownRunning(false)
    setStartTime(null);
    clearTimeout(timerRef.current)
  };

  return (
    <Wrapper>
      {!countdownFinished && !countdownRunning && <Button onClick={startGame}>Start Game</Button>}
      {countdownRunning && <RedBox onClick={handleEarlyClick}></RedBox>}
      {countdownFinished && <GreenBox onClick={handleClick}></GreenBox>}
      <h2>{message}</h2>
    </Wrapper>
  );
}

export default ReactionTest;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
`

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const RedBox = styled(Box)`
  background-color: #E74C3C;
`;

const GreenBox = styled(Box)`
  background-color: #2ECC71;
`;

*/
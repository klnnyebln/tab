import React, { useState } from 'react';

function NumberGame() {
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState('');

  const tryGuess = () => {
    const numGuess = parseInt(guess);
    if (isNaN(numGuess)) {
      setResult("숫자를 입력하세요.");
    } else {
      setAttempts(previousAttempts => previousAttempts + 1);

      if (numGuess === randomNumber) {
        setResult("정답입니다!");
      } else if (numGuess < randomNumber) {
        setResult("Up!");
      } else {
        setResult("Down!");
      }

      if (attempts === 4) { 
        setResult(previousResult => previousResult + " 게임 끝!");
      }
    }
    setGuess('');
  }

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      tryGuess();
    }
  }

  return (
    /*html*/
    <div>
      <h1>숫자 게임</h1>
      <p>1 ~ 100 사이의 숫자를 맞추시오.</p>
      <input 
        type="number" 
        value={guess}
        onChange={e => setGuess(e.target.value)}
        onKeyDown = {handleOnKeyDown}
        disabled={attempts >= 5}
      />
      <button onClick={tryGuess} disabled={attempts >= 5}>Click!</button>
      <p>{result}</p>
    </div>
  );
}


export default NumberGame;
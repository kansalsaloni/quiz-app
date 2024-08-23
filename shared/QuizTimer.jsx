import React, { useState } from 'react';
import '../style/CreateQuizStyle.css';

function QuizTimer({setTimer}) {
  const [timer,setTimerValue]=useState('off');

  return (
    <div className='timer-container'>

      <p className='quiz-type-text'>Timer</p>
        <button className={`timer-button ${timer === 'off' ? 'timer-selected' : ''}`} onClick={(e)=>setTimer(0)}>OFF</button>
        <button  className={`timer-button ${timer === '5sec' ? 'timer-selected' : ''}`} onClick={(e)=>setTimer(5)}>5 sec</button>
        <button  className={`timer-button ${timer === '10sec' ? 'timer-selected' : ''}`} onClick={(e)=>setTimer(10)}>10 sec</button>
    </div>
  )
}

export default QuizTimer

import React, { useState } from 'react'
import '../style/CreateQuizStyle.css';

function QuizTimer() {
    const [timer,setTimer]=useState('10sec');
  return (
    <div className='timer-container'>

      <p className='quiz-type-text'>Timer</p>
        <button className={`timer-button ${timer === 'off' ? 'timer-selected' : ''}`} onClick={()=>setTimer('off')}>OFF</button>
        <button  className={`timer-button ${timer === '5sec' ? 'timer-selected' : ''}`}onClick={()=>setTimer('5sec')}>5 sec</button>
        <button  className={`timer-button ${timer === '10sec' ? 'timer-selected' : ''}`} onClick={()=>setTimer('10sec')}>10 sec</button>
    </div>
  )
}

export default QuizTimer

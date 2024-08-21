import React from 'react'
import '../App.css';
import '../style/LiveQuizStyle.css';
import congratulationImage from '../assets/congratulation.png';
function CongratulationPopUp() {
  return (
    <div className='center-container' style={{backgroundColor:'#041325'}}>
    <div className='popup-container'>
      <div className='container'>
        <h1>Congrats Quiz is Completed</h1>
        <img src={congratulationImage} alt="congratulation" />
        <h1>Your score is <span>03/04</span></h1>
      </div>
    </div>
    </div>
  )
}

export default CongratulationPopUp

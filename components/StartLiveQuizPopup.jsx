
import React, { useState } from 'react'
import '../style/CreateQuizStyle.css';
import '../App.css'
import QaLiveQuiz from './QaLiveQuiz';
import PollLiveQuiz from './PollLiveQuiz'
import CongratulationPopUp from './CongratulationPopUp';
import ThankYouPopup from './ThankyouPopup';
function StartLiveQuizPopup() {
  const [currentPopup, setCurrentPopup] = useState('startQuiz'); 
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleStartQuiz = (quizType) => {
    if (quizType === 'qaQuiz') {
      setCurrentPopup('qaQuiz');
    } else if (quizType === 'pollQuiz') {
      setCurrentPopup('pollQuiz');
    }
  };
const handleSubmitQuiz=(quizType)=>{

  if (quizType === 'qaQuiz') {
  setCurrentPopup('score-popup')
  }else if (quizType === 'pollQuiz') {
    setCurrentPopup('thank-you')
  }
  console.log(selectedOptions)
}
console.log(currentPopup)
  return (

    <>
      {currentPopup === 'startQuiz' && (
      <div className='quiz-popup-overlay' >
        <div className='quiz-popup-container' id='quiz-share-link-popup-container'>
        <div >
      </div>
       
          <h2 className='title' style={{marginTop:'0px'}} id='quiz-share-link-popup-title'>Start Your Quiz
          
            </h2>
          <button className='button' onClick={()=>handleStartQuiz('qaQuiz')}   style={{ backgroundColor: '#60B84B', color:'white'}}>
            Start Quiz
          </button>
        </div>
      </div>
      )}
         {currentPopup === 'qaQuiz' && <QaLiveQuiz setSelectedOptions={setSelectedOptions} handleSubmitQuiz={() => handleSubmitQuiz(currentPopup)}/>}
         {currentPopup === 'pollQuiz' && <PollLiveQuiz handleSubmitQuiz={() => handleSubmitQuiz(currentPopup)} setSelectedOptions={setSelectedOptions}/>}
         
         {currentPopup === 'score-popup' && <CongratulationPopUp correctAnswer={1} TotalQuestions={selectedOptions.length}/>}
         {currentPopup === 'thank-you' && <ThankYouPopup />}

</>
  )
}

export default StartLiveQuizPopup


import React, { useState } from 'react';
import '../style/CreateQuizStyle.css';
import QuizPopUpButtons from '../shared/QuizPopUpButtons';

function CreateQuiz({ isOpen, onClose }) {
  const [quizName, setQuizName] = useState('');
  const [quizType, setQuizType] = useState(null);
  const handleQuizTypeChange = (type) => {
    setQuizType(type);
  };

  const handleContinue = () => {
    if (quizName && quizType) {
      // Handle the continue action, e.g., save data or navigate
    } else {
      alert("Please enter a quiz name and select a quiz type.");
    }
  };
  if (!isOpen) return null;

  return (
    <div className="quiz-popup-overlay ">
      <div className="quiz-popup-container">
                <input  type='text' name='quiz-name' className='quiz-input-field'  id="quizName"
            value={quizName}
            placeholder='Quiz Name'
            onChange={(e) => setQuizName(e.target.value)}/>
          <div className='quiz-type-container'>
            <p class='quiz-type-text'>Quiz Type</p>
    <button className={quizType=== 'Q&A' ?'selected':''} onClick={()=>{setQuizType('Q&A')}}>Q & A</button>
    <button  className={quizType=== 'Poll' ?'selected':''} onClick={()=>{setQuizType('Poll')}}>Poll Type</button>
          </div>
          <QuizPopUpButtons
          buttonText1='Cancel'
          buttonText2='Continue' />
      </div>
    </div>
  );
}

export default CreateQuiz;

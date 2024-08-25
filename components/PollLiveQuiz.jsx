import React, { useEffect, useState } from 'react'
import '../App.css';
import '../style/LiveQuizStyle.css';
import LiveQuizOption from '../shared/LiveQuizOption';
function PollLiveQuiz({handleSubmitQuiz,setSelectedOptions}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState(null);

    const quizData = {    questions: [
      {
        id: 1,
        type: 'text', // 'text', 'image', or 'imageText'
        question: 'What is the capital of France?',
        options: [
          { id: 1, text: 'Paris', isCorrect: true },
          { id: 2, text: 'London', isCorrect: false },
          { id: 3, text: 'Rome', isCorrect: false },
        ],
      },
      {
        id: 2,
        type: 'image',
        question: 'Which image shows the Eiffel Tower?',
        options: [
          { id: 1, imageUrl: 'eiffel.jpg', isCorrect: true },
          { id: 2, imageUrl: 'bigben.jpg', isCorrect: false },
          { id: 3, imageUrl: 'colosseum.jpg', isCorrect: false },
        ],
      },
      {
        id: 3,
        type: 'imageText',
        question: 'Which image and text describe the Eiffel Tower?',
        options: [
          { id: 1, imageUrl: 'eiffel.jpg', text: 'Eiffel Tower', isCorrect: true },
          { id: 2, imageUrl: 'bigben.jpg', text: 'Big Ben', isCorrect: false },
          { id: 3, imageUrl: 'colosseum.jpg', text: 'Colosseum', isCorrect: false },
        ],
      },
    ],
  };
  const handleNextQuestion = () => {
    setSelectedOptions((prev) => [
      ...prev,
      { questionId: currentQuestion.id, selectedOptionId },
    ]);
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionId(null); 

    } else {
    }
  };
  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1;

  return (
    <div className='center-container'  id='popup-center-container'>
       <div className='live-quiz-popup-container' >
        <div className='live-quiz-container'>
            <div className='header'>
            <p>{`${currentQuestion.id}/${quizData.questions.length}`}</p>            </div>
            <h2>{currentQuestion.question}</h2>
            <div className='options-button-container'>
            <LiveQuizOption options={currentQuestion.options} type={currentQuestion.type}   selectedOptionId={selectedOptionId}
            onOptionSelect={setSelectedOptionId}/>
            <button
              onClick={isLastQuestion?handleSubmitQuiz :handleNextQuestion}
              className='button'
              style={{ backgroundColor: '#60B84B', color: 'white' }}
            >
              {isLastQuestion ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default PollLiveQuiz

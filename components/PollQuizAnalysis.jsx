import React from 'react'
import '../style/QuizQuestionAnalysisStyle.css'
import QuizAnalysisHeader from '../shared/QuizAnalysisHeader';
import QuizAnalysisQuestionCard from '../shared/QuizAnalysisQuestionCard';

function PollQuizAnalysis({quiznumber,date,impressions}) {
    const questions = [
        { id: 1, text: 'What is the capital of France?' },
        { id: 2, text: 'What is 2 + 2?' },
        { id: 3, text: 'What is the boiling point of water?' },
        // Add more questions as needed
      ];
    
  return (
    <div className='quiz-analysis-container'>
    <QuizAnalysisHeader quiznumber={quiznumber} date={date} impressions={impressions}/>
    {questions.map((question, index) => (
          <div key={question.id} className='question-container'>
            <p className='question-text'>{`Q.${index+1} ${question.text}`}</p>
              <QuizAnalysisQuestionCard flexDirection='row'/>
            <hr />
          </div>
        ))}
      </div>
  )
}

export default PollQuizAnalysis

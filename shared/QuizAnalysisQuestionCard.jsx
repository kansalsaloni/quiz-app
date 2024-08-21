import React from 'react'
import '../style/QuizAnalysisQuestionCardStyle.css'

function QuizAnalysisQuestionCard({flexDirection}) {
  return (
    <div className='quiz-question-containers'>
            <div className='quiz-question-card' style={{flexDirection}}>
              <h4>60</h4>
              <p>People attempted the question</p>
            </div>
            <div className='quiz-question-card' style={{flexDirection}}>
                <h4>60</h4>
            <p>People attempted the question</p>
            </div>
            <div className='quiz-question-card' style={{flexDirection}}>
            <h4>60</h4>
            <p>People attempted the question</p>
            </div>
          </div>
  )
}

export default QuizAnalysisQuestionCard

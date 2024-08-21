import React from 'react'
import '../style/QuizQuestionAnalysisStyle.css'
function QuizAnalysisHeader({quiznumber,date,impressions}) {
  return (
    <div className='container-header'>
        <h1 >{`${quiznumber} Question Analysis`}</h1>
        <div className='header-right-container'>
        <p>{`Create on: ${date}`}</p>
        <p>{`Impression: ${impressions}`}</p>
        </div>
      </div>
  )
}

export default QuizAnalysisHeader

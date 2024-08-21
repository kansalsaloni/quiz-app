import React from 'react'

function QuizPopUpButtons({buttonText1,buttonText2}) {
  return (
    <div className='quiz-buttons-container'>
        <button className='quiz-cancel-button' >{buttonText1}</button>
        <button className='quiz-continue-button'>{buttonText2}</button>
</div>
  )
}

export default QuizPopUpButtons

import React, { useState } from 'react'
import '../style/CreateQuizStyle.css';
import QuizPopUpButtons from '../shared/QuizPopUpButtons';
import QuizOptionField from '../shared/QuizOptionField';
function QaQuiz({quizType}) {
    const [questions, setQuestions] = useState([{ id: 1 }]);
    const [optionType,setOptionType]=useState('text'); 
    const optionTypeHandler=(value)=>()=>{
      setOptionType(value);
    }
    const maxQuestions = 5;
    const addQuestion = () => {
        if (questions.length < maxQuestions) {
            setQuestions([...questions, { id: questions.length + 1 }]); // Add a new question
          }    };
  
    const removeQuestion = (id) => {
      setQuestions(questions.filter(q => q.id !== id)); // Remove the question with the given id
    };
  
  return (
    <div className="quiz-popup-overlay ">
      <div className="quiz-popup-container" id='qa-quiz-container' >
        <div className='number-of-question-container'>
            <div className='questions-and-icon'>
            {questions.map((question,index) => (
            <div key={question.id} className='question-item'>
              <div className='question-number'>{question.id}</div>
              {index > 0 && (
              <p className='remove-question-icon' onClick={() => removeQuestion(question.id)}>X</p>)
}
            </div>
          ))}
         
            <p className='add-question-icon' onClick={addQuestion}>+</p>
          
            </div>
           <p className='max-question-text'>Max 5 questions</p> 
        </div>
        <input  type='text' name='poll-question' className='quiz-input-field'   id="pollQuestion"
            // value={}
            placeholder='Poll Question'
            onChange={(e)=>{}}
            />
        <div className='quiz-type-container'>
            <p class='quiz-type-text'>Option Type</p>
            <label className='radio-label'>
          <input type='radio' name='quizType' value='text'  checked={optionType === 'text'} onClick={optionTypeHandler('text')}/>
       Text
        </label>
        <label className='radio-label'>
          <input type='radio' name='quizType' value='image-url'    checked={optionType === 'image'} onClick={optionTypeHandler('image')}/>
       Image URL
        </label>
        <label className='radio-label'>
          <input type='radio' name='quizType' value='text-image-url' checked={optionType === 'image-text'} onClick={optionTypeHandler('image-text')}/>
       Text & Image URL
        </label>
          </div>


          {/* //for Q&A TYPE */}

          {quizType === 'q&a'&& optionType==='text'&&(
    <QuizOptionField placeholder='Text' id='option-field' classname='quiz-input-field' showTwoInputField={false} showTimer={true}/>
          )}
             {quizType === 'q&a'&& optionType==='image'&&(
    <QuizOptionField placeholder='Image Url' id='option-field' classname='quiz-input-field' showTwoInputField={false} showTimer={true}/>
          )}
                       {quizType === 'q&a'&& optionType==='image-text'&&(
    <QuizOptionField placeholder='Image' id='quiz-image-text-input-field' classname='quiz-image-text-input-field' showTwoInputField={true} showTimer={true}/>
          )}


          {/* //for POLL TYPE */}

             {quizType === 'poll'&& optionType==='text'&&(
    <QuizOptionField placeholder='Text' id='option-field' classname='quiz-input-field' showTwoInputField={false} showTimer={false} />
          )}
             {quizType === 'poll'&& optionType==='image'&&(
    <QuizOptionField placeholder='Image Url' id='option-field' classname='quiz-input-field' showTwoInputField={false} showTimer={false}/>
          )}
                       {quizType === 'poll'&& optionType==='image-text'&&(
    <QuizOptionField placeholder='Image' id='quiz-image-text-input-field' classname='quiz-image-text-input-field' showTwoInputField={true} showTimer={false}/>
          )}
      <QuizPopUpButtons 
      buttonText1='Cancel'
      buttonText2='Create Quiz'/>
        </div>
        </div>
  )
}

export default QaQuiz;

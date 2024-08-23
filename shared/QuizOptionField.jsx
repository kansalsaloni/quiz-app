import React, { useState } from 'react';
import '../style/CreateQuizStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import QuizTimer from './QuizTimer';

function QuizOptionField({placeholder,id,classname,showTwoInputField,showTimer,options,addOption,removeOption,handleOptionChange,setTimer}) {
  const [selectedOption, setSelectedOption] = useState();
  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='question-options-container'>
      <div className='options-fields'>
        <div className='options-list'>
          {options.map((option, index) => (
            <div key={index} className='option-item'>
              {showTimer &&(
              <label >
                <input
                  type='radio'
                  name='questionOptions'
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionSelect}
                  className={selectedOption === option ? 'radio-selected' : ''}
                />
              </label>
              )}
              <input
                type='text'
                value={option}
                className={`${classname} ${selectedOption === option ? 'input-selected' : ''}`}
                id={id}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={classname==='quiz-image-text-input-field'?'Text':placeholder}
              />
              {showTwoInputField && (
                 <input
                type='text'
                value={option}
                className={`${classname}  ${selectedOption === option ? 'input-selected' : ''}`}
                id={id}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={classname==='quiz-image-text-input-field'?'Image Url':placeholder}
              /> 
                )}
              {index > 1 && (
                <button
                  type='button'
                  className='remove-option-button'
                  onClick={() => removeOption(index)}
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
              )}
            </div>
          ))}
        </div>
        {options.length<5&&(
        <button
          type='button'
          className='add-option-button'
          style={{ marginLeft: showTimer ? '10px' : '9px' }}
          onClick={addOption}
        >
          Add Option
        </button>
        )
}
      </div>
{showTimer&&(     <QuizTimer setTimer={setTimer}/>)}
 
    </div>
  );
}

export default QuizOptionField;

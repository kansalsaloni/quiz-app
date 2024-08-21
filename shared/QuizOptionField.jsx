import React, { useState } from 'react';
import '../style/CreateQuizStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import QuizTimer from './QuizTimer';

function QuizOptionField({placeholder,id,classname,showTwoInputField,showTimer}) {
  const [options, setOptions] = useState(['', '', '', '']);
  const [selectedOption, setSelectedOption] = useState();

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, '']);
    }
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index); // Remove option at index
    setOptions(newOptions);
    if (selectedOption === options[index]) {
      setSelectedOption(''); // Clear selected option if removed
    }
  };

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
{showTimer&&(     <QuizTimer />)}
 
    </div>
  );
}

export default QuizOptionField;

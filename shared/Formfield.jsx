import React from 'react'
import '../style/FormStyle.css'
const Formfield = ({ label, type = 'text', value, onChange, name,error }) => {

  return (
    <div className="form-field">
    <label className="form-field-label" htmlFor={name}>{label}</label>
    <input
        className='form-field-input'
        type={type}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        required
    />
</div>
  )
}

export default Formfield;

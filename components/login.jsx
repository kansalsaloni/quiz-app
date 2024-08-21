import React, { useState } from 'react'
import  '../App.css';
import Formfield from '../shared/Formfield';
import '../style/FormStyle.css'

function Login() {
    const [isLogin,setIsLogin]=useState(true);
    const [signUpFormData, setSignUpFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword:'',
    });
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
      
    });
    const handleToggle=()=>{
        setIsLogin(!isLogin)
    }
    const handleLoginFormChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    };
    const handleSignupFormChange = (e) => {
        const { name, value } = e.target;
        setSignUpFormData({ ...signUpFormData, [name]: value });
    };

      const loginFormSubmit = (e) => {
        e.preventDefault();

      };
    
      const signUpFormSubmit = (e) => {
        e.preventDefault();

      };
  return (
    <div className="center-container">
    <div className="login-popup-box">
      <h1 className='title'>QUIZZIE</h1>
      <div className='auth-toggle'>
      <p
            onClick={handleToggle}
            className={`toggle-button ${!isLogin ? 'active' : ''}`}
          >
            Signup
          </p>
          <p
            onClick={handleToggle}
            className={`toggle-button ${isLogin ? 'active' : ''}`}
          >
            Login
          </p>
      </div>
{isLogin?
   
        <form onSubmit={loginFormSubmit}  className="form-container" >

          <Formfield
          label="Email"
          type="email"
          name="email"
          value={loginFormData.email}
          onChange={handleLoginFormChange}
          />    
          <Formfield
          label="Password"
          type="password"
          name="password"
      
          value={loginFormData.password}
          onChange={handleLoginFormChange}
          /> 
          <button type="submit" className='button'>Login</button>

          </form>

      :
        <form onSubmit={signUpFormSubmit}  className="form-container">
        <Formfield
          label="Name"
          type="text"
          name="name"
        
          value={signUpFormData.name}
          onChange={handleSignupFormChange}
          />  
          <Formfield
          label="Email"
          type="email"
          name="email"
       
          value={signUpFormData.email}
          onChange={handleSignupFormChange}
          />    
          <Formfield
          label="Password"
          type="password"
          name="password"
      
          value={signUpFormData.password}
          onChange={handleSignupFormChange}
          /> 
            <Formfield
          label="Confirm Password"
          type="password"
          name="confirmPassword"
       
          value={signUpFormData.confirmPassword}
          onChange={handleSignupFormChange}
          /> 
                    <button type="submit" className='button' >Sign-Up</button>

          </form>

}
    </div>
    </div>
  )
}

export default Login

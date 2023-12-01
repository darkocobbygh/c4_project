import { useState } from 'react';
import './login.css'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [details,setDetails]=useState({
    email: '',
    password: ''
  });

  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('a user has logged in');
    console.log(details.email)
    navigate('/')
  };

  const handleOnChange=(e)=>{
    const {name,value}=e.target;
    setDetails(previousDetails=>{
      return({
        ...previousDetails,
        [name]:value
      })
    })
  }
  return (
    <div className='login-container'>
      <div className='back'>
      <FaArrowLeft color='gray' />
      <p>Back</p>
      </div>
       <div className='login'>
      <h1>Login</h1>
      <p>Get started with Shortly</p>
     </div>
     <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className='login-label'>Email</label>
        <input type="email" name='email' value={details.email} onChange={handleOnChange} />
        <label htmlFor="password" className='login-label'>Password</label>
        <input type="password" />
        <p className='forgot'>forgot password ?</p>
        <button>Login</button>
      </form>
     </div>
     <div className='sig'>
      <p className='no-account'>Don’t have an account yet? </p>
      <a href="">
        <p>Sign-Up</p>
      </a>
     </div>
    </div>
  )
}

export default Login

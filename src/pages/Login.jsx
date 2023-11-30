import './login.css'
import { FaArrowLeft } from "react-icons/fa";
const Login = () => {
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
      <form action="">
        <label htmlFor="email" className='login-label'>Email</label>
        <input type="email" />
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

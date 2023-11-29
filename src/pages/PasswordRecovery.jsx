
const PasswordRecovery = () => {
  return (
    <div className='login-container'>
    <div className='recovery'>
   <h1>Forgot Password</h1>
   <p>Enter the email address you used when you joined
and we’ll send you instructions to reset your password</p>
  </div>
  <div>
   <form action="">
     <label htmlFor="email" className='login-label'>Email</label>
     <input type="email" />
     <button>Send recovery code</button>
   </form>
  </div>
  <div className='sig'>
   <a href="">
     <p>Back to sign in</p>
   </a>
  </div>
 </div>
  )
}

export default PasswordRecovery

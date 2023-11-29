const SignUp = () => {
  return (
    <div className='login-container'>
    <div className='login'>
   <h1>Sign up</h1>
   <p>Get started with Shortly</p>
  </div>
  <div>
   <form action="">
     <div className="names">
     <div className="name">
     <label htmlFor="email" className='login-label'>First name</label>
     <input type="text" />
     </div>
     <div className="name">
     <label htmlFor="email" className='login-label'>Last name</label>
     <input type="text" />
     </div>
     </div>
     <label htmlFor="password" className='login-label'>Password</label>
     <input type="password" />
     <label htmlFor="password" className='login-label'>Confirm password</label>
     <input type="password" />
     <button>Sign up</button>
   </form>
  </div>
  <div className='sig'>
   <p className='no-account'>Already have an account? </p>
   <a href="">
     <p>Sign in</p>
   </a>
  </div>
 </div>
  )
}

export default SignUp

import { useState } from "react"
const SignUp = () => {
    const [details,setDetails]=useState({
        firstName: '',
        lastName: '',
        password: ''
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('A new user has been added');
        console.log(details.firstName+ ' just signed up');
    }
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
    <div className='login'>
   <h1>Sign up</h1>
   <p>Get started with Shortly</p>
  </div>
  <div>
   <form onSubmit={handleSubmit}>
     <div className="names">
     <div className="name">
     <label htmlFor="email" className='login-label'>First name</label>
     <input type="text" name="firstName" value={details.firstName} onChange={handleOnChange} />
     </div>
     <div className="name">
     <label htmlFor="email" className='login-label'>Last name</label>
     <input type="text" value={details.lastName} name="lastName" onChange={handleOnChange} />
     </div>
     </div>
     <label htmlFor="password" className='login-label'>Password</label>
     <input type="password" value={details.password} name="password" onChange={handleOnChange} />
     <label htmlFor="password" className='login-label'>Confirm password</label>
     <input type="password"  value={details.password} name="password" onChange={handleOnChange} />
     <button type="submit">Sign up</button>
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

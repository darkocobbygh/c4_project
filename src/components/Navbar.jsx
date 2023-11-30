import { useState } from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import './navbar.css'
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen,setIsOpen]= useState(false);
const toggleNav=()=>{
    setIsOpen(!isOpen)
}
  return (
    <div>
      <nav className="navbar">
       <div className="logo">
       <img src={logo} alt="" />
       </div>
        <ul className="lists">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
        </ul>
        <button onClick={toggleNav} className="butts">
    {isOpen? <FaTimes color="gray" size={30} /> : <FaBars color="gray" size={30}/>}
</button>
<div className="auth">
    <button className="aut">Login</button>
    <button className="auths">Signup</button>
</div>
      </nav>
      {isOpen && (
        <div>
            <ul className="list">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
        </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar

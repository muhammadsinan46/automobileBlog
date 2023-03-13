import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
        <div className="signup">
      
      <form className="signupForm">
      <span className="signupTitle">Sign Up</span>
      <label>Name</label>
      <input className="signupInput" type="name" placeholder="Enter your name.. " />
      <label>Email</label>
      <input className="signupInput" type="email" placeholder="Enter your email.. " />
      <label>Password</label>
      <input className="signupInput" type="password" placeholder="Enter  your password" />
      <button className="signupButton">Sign Up</button>
      <p className="logintext">Already a member?</p>
      <button className="loginButton"><Link className="link" to="/login">LOGIN</Link></button>
      </form>
    </div>
    </div>
  )
}

export default Signup
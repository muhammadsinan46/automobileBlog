import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      
      <form className="loginForm">
      <span className="loginTitle">Login</span>
      <label>Email</label>
      <input className="loginInput" type="email" placeholder="Enter your email.. " />
      <label>Password</label>
      <input className="loginInput" type="password" placeholder="Enter  your password" />
      <button className="loginButton">LOGIN</button>
      <p className="signuptext">Not a member?</p>
      <button className="signupButton"><Link className="link" to="/signup">SIGNUP</Link></button>
      </form>
    </div>
  );
};

export default Login;

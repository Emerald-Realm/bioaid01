import React from "react";
import { Link } from 'react-router-dom'
import Big from '../../images/bioaidlogo.svg'

function SignIn() {
  return (
    <div className="sign-in">
      <img src={Big} alt="medal-img" className="logo-img" />
      <div className="content">
        <form action="#" className="signin">
          <label htmlFor="username" className="in-label">
            Enter Your Name to sign in
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="in-input"
            placeholder="username"
          />
          <button type="submit" className="in-submit">
            Sign in
          </button>
        </form>
          <Link to="/signup" className="link-two">
            Click here to create New Account
          </Link>
        <div className="otherside">
          <p className="other-text">Login with others</p>
          <button className="other">Login with Google</button>
          <button className="other">Login with Twitter</button>
          <button className="other">Login with Medium</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import React from 'react';
import { Typography, Button } from '@material-ui/core';
import './SignUpPage.css';

const SignUpPage = ({handleSignupSubmit, setUsername, setPassword}) => {
  return (
    <div className="signup-wrapper">
      <h1>Sign Up Below</h1>
      <div>
        <p>Username</p>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <p>Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <div>
        <Button onClick={handleSignupSubmit}>Submit</Button>
      </div>
    </div>
    </div>
  )
}

export default SignUpPage;
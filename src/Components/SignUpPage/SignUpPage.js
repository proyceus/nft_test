import React from 'react';
import { Typography, Button } from '@material-ui/core';
import './SignUpPage.css';

const SignUpPage = ({handleSignupSubmit, setUsername, setPassword}) => {
  return (
    <div className="signup-wrapper">
      <h1>Sign Up Below</h1>
      <form onSubmit={handleSignupSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
    </div>
  )
}

export default SignUpPage;
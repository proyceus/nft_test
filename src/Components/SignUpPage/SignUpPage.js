import React from 'react';
import { Typography, Button } from '@material-ui/core';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <div className="signup-wrapper">
      <h1>Sign Up Below</h1>
      <form action="/api/newuser" method="post">
      <label>
        <p>Username</p>
        <input name="username" placeholder="username" type="text" />
      </label>
      <label>
        <p>Password</p>
        <input name ="password" placeholder="password" type="password" />
      </label>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
    </div>
  )
}

export default SignUpPage;
import React from 'react';
import { Typography, Button } from '@material-ui/core';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
    </div>
  )
}

export default LoginPage;
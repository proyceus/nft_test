import React from 'react';
import { Typography, Button } from '@material-ui/core';
import './LoginPage.css';

const LoginPage = ({handleLoginSubmit, setPassword, setUsername}) => {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <div>
        <p>Username</p>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <p>Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <div>
        <Button onSubmit={handleLoginSubmit} type="submit">Submit</Button>
      </div>
    </div>
    </div>
  )
}

export default LoginPage;
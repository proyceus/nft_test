import React from 'react';
import { Typography, Button } from '@material-ui/core';
import './LoginPage.css';

const LoginPage = ({handleLoginSubmit, setPassword, setUsername}) => {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleLoginSubmit}>
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

export default LoginPage;
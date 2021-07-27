import React from 'react';
import { Typography } from '@material-ui/core';

const ProfilePage = ({loginToken}) => {
  return (
    <div>
      <Typography variant="h1">Your Profile</Typography>
      <Typography variant="h3">{loginToken.username}</Typography>
    </div>
  )
}

export default ProfilePage;
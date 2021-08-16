import React from "react";
import { MenuList, MenuItem } from "@material-ui/core";
import "./TopMenu.css";
import {
  Link
} from "react-router-dom";

const TopMenu = ({ isLoggedIn, handleLogoutClick, getUser }) => {
  return (
      <MenuList className="horizontal-menu">
        <Link to="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/profile">
        {isLoggedIn === true && <MenuItem>Profile</MenuItem>}
        </Link>
        <Link to="/login">
          {!isLoggedIn && <MenuItem>Log in</MenuItem>}
        </Link>
        {isLoggedIn && <MenuItem onClick={handleLogoutClick}>Log out</MenuItem>}
        <Link to="/signup">
          <MenuItem>{isLoggedIn ? "" : "Sign up"}</MenuItem>
        </Link>
      </MenuList>
  );
};

export default TopMenu;
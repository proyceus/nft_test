import React from "react";
import { MenuList, MenuItem } from "@material-ui/core";
import "./TopMenu.css";
import {
  Link
} from "react-router-dom";

const TopMenu = ({ isLoggedIn, handleLogoutClick }) => {
  return (
      <MenuList className="horizontal-menu">
        <Link to="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/profile">
          {isLoggedIn === true && <MenuItem>My Profile</MenuItem>}
        </Link>
        <Link to="/favorites">
        {isLoggedIn === true && <MenuItem>Favorites</MenuItem>}
        </Link>
        <Link to="/login">
          <MenuItem onClick={handleLogoutClick}>{isLoggedIn ? "Log out" : "Log in"}</MenuItem>
        </Link>
        <Link to="/signup">
          <MenuItem>{isLoggedIn ? "" : "Sign up"}</MenuItem>
        </Link>
      </MenuList>
  );
};

export default TopMenu;
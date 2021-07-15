import React from "react";
import { MenuList, MenuItem } from "@material-ui/core";
import "./TopMenu.css";
import {
  Link
} from "react-router-dom";

const TopMenu = ({ isLoggedIn, onClick }) => {
  return (
      <MenuList className="horizontal-menu">
        <Link to="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/profile">
          <MenuItem>My Profile</MenuItem>
        </Link>
        <Link to="/favorites">
          <MenuItem>Favorites</MenuItem>
        </Link>
        <Link to="/login">
          <MenuItem onClick={onClick}>{isLoggedIn ? "Log out" : "Log in"}</MenuItem>
        </Link>
      </MenuList>
  );
};

export default TopMenu;
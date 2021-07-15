import React from "react";
import { MenuList, MenuItem } from "@material-ui/core";
import "./SideMenu.css";

const SideMenu = ({ isLoggedIn, onClick }) => {
  return (
      <MenuList className="horizontal-menu">
        <MenuItem>Home</MenuItem>
        <MenuItem>My Profile</MenuItem>
        <MenuItem>Favorites</MenuItem>
        <MenuItem onClick={onClick}>{isLoggedIn ? "Log out" : "Log in"}</MenuItem>
      </MenuList>
  );
};

export default SideMenu;
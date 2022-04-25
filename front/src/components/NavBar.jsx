import React from "react";
import Tv from "../assets/images/tv.png";
import Menu from "../assets/images/Menu.png";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="base-logo main">
          <img className="main-logo" src={`${Tv}`} alt="" />
          <h1>MovieBox</h1>
        </div>
      </Link>
      <div className="search">
        <input type="text" placeholder="What do you want to watch?" />
        <IconButton className="icon">
          <Search color="white" style={{ color: "white" }} />
        </IconButton>
      </div>
      <div className="base-logo">
        <h3>Sign in</h3>
        <img className="auth-logo" src={`${Menu}`} alt="" />
      </div>
    </nav>
  );
}

export default NavBar;

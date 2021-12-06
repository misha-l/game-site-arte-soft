import { Link, NavLink } from "react-router-dom";

import Sparks from "../Sparks/Sparks.js";
import Smog from "../Smog/Smog.js";

import "./Header.css";
import logo from "./logo-1.png";

const Header = () => {
  return (
    <header class="header">
      <div class="top-panel flex-c-c">
        <ul class="menu flex-c-c">
          <li class="active">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/forum">FORUM</Link>
          </li>
          <li>
            <Link to="/guilds">Guilds</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <div class="topPanel__buttons flex">
          <a href="#login-login" class="open_modal button">
            Log In
          </a>
          <a href="#resister" class="open_modal buttonDark">
            Sign Up
          </a>
        </div>
      </div>
      <div class="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <Sparks></Sparks>
      <Smog></Smog>
    </header>
  );
};

/*
<Sparks></Sparks>
      <Smog></Smog> */

export default Header;

import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">NC News</Link>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;

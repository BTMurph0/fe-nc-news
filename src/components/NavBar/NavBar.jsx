import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav id="nav">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
    </nav>
  );
}

export default NavBar;
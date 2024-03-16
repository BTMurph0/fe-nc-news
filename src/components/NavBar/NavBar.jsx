import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav id="nav">
      <Link to="/articles">Articles</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default NavBar;

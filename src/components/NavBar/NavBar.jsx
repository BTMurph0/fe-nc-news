import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav id="nav">
      <div>
        <Link className="link" to="/articles">
          Articles
        </Link>
      </div>
      <div>
        <Link className="link" to="/users">
          Users
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

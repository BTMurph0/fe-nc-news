import "./Header.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { LoginContext } from "../../contexts/LoginContext";

const Header = () => {
  const { login } = useContext(LoginContext);

  return (
    <header>
      <img className="loggedInUser" src={login.avatar_url} alt="" />
      <p>{login.username} is logged in</p>
      <h1>
        <Link className="headerLink" to="/">NC News</Link>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;

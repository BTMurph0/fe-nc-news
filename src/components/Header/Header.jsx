import "./Header.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { LoginContext } from "../../contexts/LoginContext";

const Header = () => {
  const { login } = useContext(LoginContext);

  return (
    <>
    <header className="mainHeader">
      <div className="headerUser">
        <div className="header">
          <Link className="headerLink" to="/">
            <h1 className="siteName">NC News</h1>
          </Link>
        </div>
        <div className="user">
          <img className="loggedInUser" src={login.avatar_url} alt="" />
          <p>{login.username}</p>
        </div>
      </div>
      <NavBar />
    </header>
    </>
  );
};

export default Header;

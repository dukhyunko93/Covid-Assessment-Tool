import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h1 className="nav-header">COVID Assesment Tool</h1>
        </Link>
        <div className="nav-content">
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <Button className="login">Login </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            <Button className="sign-up">Sign Up </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;

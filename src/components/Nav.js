import React from "react";
import { Button } from '@material-ui/core';
import "../css/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <h1 className="nav-header">COVID Assesment Tool</h1>
        <div className="nav-content">
          <Button className="login">Login </Button>
          <Button className="sign-up">Sign Up </Button>
        </div>
      </div>
    </>
  );
};

export default Nav;

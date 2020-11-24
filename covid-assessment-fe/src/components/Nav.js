import React from "react";
import "../css/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <h1 className="nav-header">COVID Assesment Tool</h1>
        <div className=".nav-content">
          <button className="login">Login</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Nav;

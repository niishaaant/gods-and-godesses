import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">LIFE2</div>
      <div className="link-container">
        <div className="link-item">ABOUT</div>
        <div className="link-item">ROADMAP</div>
        <div className="link-item">COLLECTION</div>
        <div className="link-item">ECOSYSTEM</div>
        <div className="link-item">TEAM</div>
      </div>
      <div className="action-container">
        <button>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Nav;

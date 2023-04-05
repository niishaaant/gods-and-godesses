import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">L2</div>
      <div className="link-container">
        <div className="link-item">ROADMAP</div>
        <div className="link-item">COLLECTION</div>
        <div className="link-item">BUY NFT</div>
        <div className="link-item">ECOSYSTEM</div>
        <div className="link-item">TEAM | SUPPORT</div>
        <div className="link-item">BLOG</div>
      </div>
      <div className="action-container">
        <button>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Nav;

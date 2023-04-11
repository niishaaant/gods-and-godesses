import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/" className="link">
          L2
        </Link>
      </div>
      <div className="link-container">
        <Link to="/" className="link">
          <div className="link-item">HOME</div>
        </Link>
        <Link to="/roadmap" className="link">
          <div className="link-item">ROADMAP</div>
        </Link>
        <div className="link-item">
          <Link to="/collection" className="link">
            COLLECTION
          </Link>
        </div>
        <div className="link-item">
          <Link to="/buynft" className="link">
            BUY NFT
          </Link>
        </div>
        <div className="link-item">
          <Link to="/teamsupport" className="link">
            TEAM | SUPPORT
          </Link>
        </div>
      </div>
      <div className="action-container">
        <button disabled={true}>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Nav;

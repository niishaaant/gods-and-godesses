import React, { useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import close from "../../utils/icons8-close-window-50.png";
import open from "../../utils/icons8-menu-50.png";
import logo from "../../utils/siteLogo2.png";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className="nav-container">
        <button
          onClick={() => {
            setOpenNav(true);
          }}
          className="openNavbar"
        >
          <img src={open} width="20px" height="20px" />
        </button>
        <div className="logo-container">
          <Link to="/" className="link">
            <img src={logo} />
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
      <ResponsiveNav openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

const ResponsiveNav = ({ openNav, setOpenNav }) => {
  return (
    <div className={`responsive-nav-container ${openNav ? "active" : ""}`}>
      <div className="close">
        <button
          className="openNavbar"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <img src={close} width="40px" height="40px" />
        </button>
      </div>
      <div className="links-container">
        <Link
          to="/"
          className="link"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <div className="link-item">HOME</div>
        </Link>
        <hr></hr>
        <Link
          to="/roadmap"
          className="link"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <div className="link-item">ROADMAP</div>
        </Link>
        <hr></hr>
        <div className="link-item">
          <Link
            to="/collection"
            className="link"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            COLLECTION
          </Link>
        </div>
        <hr></hr>
        <div className="link-item">
          <Link
            to="/buynft"
            className="link"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            BUY NFT
          </Link>
        </div>
        <hr></hr>
        <div
          className="link-item"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <Link to="/teamsupport" className="link">
            TEAM | SUPPORT
          </Link>
        </div>
      </div>
      <div className="social-container"></div>
    </div>
  );
};

export default Nav;

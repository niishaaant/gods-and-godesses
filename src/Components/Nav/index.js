import React, { useState } from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import close from "../../utils/icons8-close-window-50.png";
import open from "../../utils/icons8-menu-50.png";
import logo from "../../utils/siteLogo2.png";
import fb from "../../utils/icons8-facebook-24.png";
import twitter from "../../utils/icons8-twitter-48.png";
import insta from "../../utils/icons8-instagram-24.png";
import reddit from "../../utils/icons8-reddit-24.png";

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
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <img src={logo} />
          </NavLink>
        </div>
        <div className="link-container">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="link-item">HOME</div>
          </NavLink>
          <NavLink
            to="/roadmap"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="link-item">ROADMAP</div>
          </NavLink>
          <div className="link-item">
            <NavLink
              to="/collection"
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              COLLECTION
            </NavLink>
          </div>
          {/* <div className="link-item">
            <NavLink
              to="/buynft"
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              BUY NFT
            </NavLink>
          </div> */}
          <div className="link-item">
            <NavLink
              to="/teamsupport"
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              TEAM | SUPPORT
            </NavLink>
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
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active link" : "link")}
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <div className="link-item">HOME</div>
        </NavLink>
        <hr></hr>
        <NavLink
          to="/roadmap"
          className={({ isActive }) => (isActive ? "active link" : "link")}
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <div className="link-item">ROADMAP</div>
        </NavLink>
        <hr></hr>
        <div className="link-item">
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={() => {
              setOpenNav(false);
            }}
          >
            COLLECTION
          </NavLink>
        </div>
        {/* <hr></hr> */}
        {/* <div className="link-item">
          <NavLink
            to="/buynft"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={() => {
              setOpenNav(false);
            }}
          >
            BUY NFT
          </NavLink>
        </div> */}
        <hr></hr>
        <div
          className="link-item"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <NavLink
            to="/teamsupport"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            TEAM | SUPPORT
          </NavLink>
        </div>
      </div>
      <div className="social-container">
        <div className="left">
          <div className="logos">
            <span className="twitter logo">
              <a href="https://twitter.com/Life2_io">
                <img src={twitter} width="26px" height="26px" />
              </a>
            </span>
            <span className="facebook logo">
              <a href="https://www.facebook.com/profile.php?id=100091639115487">
                <img src={fb} width="24px" height="24px" />
              </a>
            </span>
            <span className="reddit logo">
              <a href="https://www.reddit.com/r/Life2_io/">
                <img src={reddit} width="24px" height="24px" />
              </a>
            </span>
            <span className="instagram logo">
              <a href="https://instagram.com/life2_io">
                <img src={insta} width="24px" height="24px" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

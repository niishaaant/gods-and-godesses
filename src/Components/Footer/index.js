import React from "react";
import "./footer.scss";
import fb from "../../utils/icons8-facebook-24.png";
import twitter from "../../utils/icons8-twitter-48.png";
import insta from "../../utils/icons8-instagram-24.png";
import reddit from "../../utils/icons8-reddit-24.png";

const Footer = () => {
  return (
    <div className="footer-container">
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
      <div className="right">
        <div className="rights">ALL RIGHTS RESERVED - 2022-2023</div>
      </div>
    </div>
  );
};

export default Footer;

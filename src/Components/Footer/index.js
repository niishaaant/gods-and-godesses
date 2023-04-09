import React from "react";
import "./footer.scss";
import fb from "../../utils/fb.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <div className="logos">
          <span className="twitter"></span>
          <span className="facebook">
            <img src={fb} />
          </span>
          <span className="reddit"></span>
          <span className="instagram"></span>
        </div>
      </div>
      <div className="right">
        <div className="rights">ALL RIGHTS RESERVED - 2022-2023</div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="call-to-action">
          <p>HERO TEXT HERE.</p>
          <div className="hero-button-container">
            <button className="primary">Buy NFTs</button>
            <button>Know more</button>
          </div>
        </div>
        <div className="gods-godess-gif">
          <div className="image">GIF here.</div>
        </div>
      </div>
      <About />
    </>
  );
};

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="heading">About Life2</div>
        <div className="content">content...</div>
        <div className="image">Images showing community support</div>
        <div className="content">content...</div>
        <div className="vision">
          <div className="vision-content">
            <div className="heading">OUR VISION</div>
            <div className="content">contecnt</div>
          </div>
          <div className="vision-image">Vision Image</div>
        </div>
        <div className="mission">
          <div className="mission-image">Mission Image</div>
          <div className="mission-content">
            <div className="heading">OUR MISSION</div>
            <div className="content">contecnt</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

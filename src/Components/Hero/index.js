import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hero.scss";
import gods from "../../utils/gods.mp4";
import logo from "../../utils/siteLogo.png";
import logo2 from "../../utils/siteLogo2.png";
import logo3 from "../../utils/siteLogo3.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="landing">
        <div id="title">
          <div className="instruction left">Introducing</div>
          <img src={logo3}></img>
          <div className="instruction">
            scroll to <span style={{ color: "#fff" }}>explore</span>
          </div>
        </div>
      </div>
      <ActionSection />
      <AboutLife2 />
    </div>
  );
};

const ActionSection = () => {
  return (
    <>
      <div className="action-section-container">
        <div className="intro-text">
          <div className="introduction-container">
            <div className="website-name">Life2</div>
            <div className="website-tagline">
              We are building an ecosystem of brands and products designed to
              make the transition from Web2 to Web3 a reality.
            </div>
          </div>
          <div className="call-to-action-container">
            <Link
              to="/files/whitepaper.pdf"
              target="_blank"
              download
              className="link"
            >
              <button className="primary-action">Get WhitePaper</button>
            </Link>
            <Link to="/collection" className="link">
              <button className="secondary-action">Explore Ecosystem</button>
            </Link>
          </div>
        </div>
        <div className="logo">
          <img src={logo} />
        </div>
      </div>
    </>
  );
};

const AboutLife2 = () => {
  return (
    <div className="about-life-container">
      <div className="gif">
        <div className="border">
          <video src={gods} autoPlay muted loop></video>
        </div>
      </div>
      <div className="about-text-container">
        <div className="about-text">
          <span className="heading">Introduction</span>
          <br></br>
          Life2.io is an innovative NFT multiverse project that aims to provide
          a transformative digital experience for users by combining
          cutting-edge technology, immersive storytelling, and an engaging
          virtual environment. As the concept of metaverse gains prominence and
          digital life becomes increasingly intertwined with our daily routines,
          we see an opportunity to create a platform that connects people
          through a shared virtual space, transcending the boundaries of time,
          geography, and culture.
        </div>
        <div className="about-text">
          <span className="heading">NFT collections</span>
          <br></br>
          At the core of Life2.io lies the integration of NFTs, which serve as
          the building blocks of our multiverse. NFTs, or non-fungible tokens,
          are unique digital assets secured on the blockchain, ensuring their
          scarcity, provenance, and ownership. By utilizing NFTs, we enable
          users to own, trade, and use a wide array of characters and their
          traits as avatars within the multiverse. This not only empowers
          individuals to customize their digital presence but also fosters a
          vibrant, interconnected community where users can engage in social
          interactions, trade, and collaborate on shared experiences.
          <Link to="/buynft">
            <button>Know More</button>
          </Link>
        </div>
        <div className="about-text">
          <span className="heading">Globuschain</span>
          <br></br>
          Life2.io is an integral part of the Globuschain Project, a visionary
          initiative that seeks to revolutionize the way people interact with
          digital worlds and assets. This multiverse offers a diverse and
          expansive digital universe, spanning different eras, cultures, and
          dimensions. By purchasing NFTs within the Life2.0 multiverse, users
          will gain exclusive access to participate in the private sale of
          Globuschain's native token, GLSC (Globus Smart Coin). Moreover,
          investors and buyers will enjoy premium treatment and priority access
          to all future Globuschain products and services, along with exclusive
          discounts.
          <a href="https://globuschain.com/">
            <button>Know More</button>
          </a>
        </div>
        <div className="about-text">
          <button style={{ fontSize: "1.2rem" }}>
            <Link to="/roadmap" className="link">
              Click here
            </Link>
          </button>{" "}
          to see the complete Roadmap.
        </div>
      </div>
    </div>
  );
};

export default Hero;

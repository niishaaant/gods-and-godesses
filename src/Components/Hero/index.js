import React, { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./hero.scss";
import gods from "../../utils/godsAndGoddesses.mp4";
import logo from "../../utils/siteLogo.png";
import logo3 from "../../utils/siteLogo3.png";
import globuslogo from "../../utils/globus-logo.png";
import god1 from "../../utils/IMG_4632.gif";
import god2 from "../../utils/IMG_4633.gif";
import god3 from "../../utils/IMG_4634.gif";
import god4 from "../../utils/IMG_4635.gif";
import god5 from "../../utils/IMG_4636.gif";
import god9 from "../../utils/IMG_4640.gif";
import god10 from "../../utils/IMG_4641.gif";
import god11 from "../../utils/IMG_4642.gif";
import god12 from "../../utils/IMG_4643.gif";
import god13 from "../../utils/IMG_4644.gif";
import god15 from "../../utils/IMG_4646.gif";
import god16 from "../../utils/IMG_4647.gif";

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
      <Scroller />
      <ActionSection />
      <GlobusSection />
      <AboutLife2 />
      <Benefits />
    </div>
  );
};

const ActionSection = () => {
  const [showMore, setShowMore] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="action-section-container">
        <div className="intro-text">
          <div className="introduction-container">
            <div className="website-name">Life2</div>
            <div className="website-tagline">
              Life2.io, an innovative NFT multiverse project, combines
              cutting-edge technology, immersive storytelling, and engaging
              virtual environments to create transformative digital experiences.
              <br></br>
              <div className={showMore ? "contenct more" : "content"}>
                The Life2 multiverse, crafted by eternal beings called the
                Architects, spans past, present, and future worlds. The Eternal
                Gods of Egypt were summoned to oversee the first world, shaping
                the multiverse's destiny. As new worlds emerged, Life2 Pioneers
                forged their digital identities and explored this interconnected
                tapestry of worlds, powered by the universal currency, Globus
                Smart Coins (GLSC).
              </div>
              <button
                onClick={() => {
                  setShowMore(!showMore);
                }}
                style={{ fontSize: "1.2rem" }}
              >
                {showMore ? "Read less" : "Read more"}
              </button>
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
              <button className="secondary-action" onClick={scrollToTop}>
                Explore Ecosystem
              </button>
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
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="about-life-container">
      <div className="about-text-container">
        <div className="about-text">
          <span className="heading">NFT collections</span>
          <br></br>
          Discover the Eternal Gods of Egypt NFT collection, a journey into
          ancient mythology. Own an exclusive and valuable piece of history with
          these limited edition, beautifully illustrated NFTs.
          <Link to="/collection">
            <button onClick={scrollToTop}>Know More</button>
          </Link>
        </div>
        <div className="about-text">
          <button style={{ fontSize: "1.2rem" }}>
            <Link to="/roadmap" className="link" onClick={scrollToTop}>
              Click here
            </Link>
          </button>{" "}
          to see the complete Roadmap.
        </div>
      </div>
      <div className="gif">
        <div className="border">
          <video src={gods} autoPlay muted loop></video>
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="heading">What's in it for you?</div>
      <div className="content">
        <div className="one">
          <div className="no">1</div>
          <div>Exclusive membership to Life2 Multiverse</div>
        </div>
        <div className="two">
          <div className="no">2</div>
          <div>Early access to GlobusChain blockchain products</div>
        </div>
        <div className="three">
          <div className="no">3</div>
          <div> Nft buyers only participate into the glsc presale</div>
        </div>
      </div>
    </div>
  );
};

const GlobusSection = () => {
  return (
    <div className="globus-container">
      <div className="logo">
        <img src={globuslogo} />
      </div>
      <div className="content">
        <span className="heading">Globuschain</span>
        <br></br>
        Life2.io is part of the Globuschain Project, a digital revolution
        linking worlds and assets. By purchasing NFTs within Life2.io, users
        gain access to Globuschain's private sale and exclusive perks across all
        products and services.
        <br></br>
        <a href="https://globuschain.com/">
          <button>Visit</button>
        </a>
      </div>
    </div>
  );
};

const Scroller = () => {
  return (
    <div className="scroller-container">
      <Marquee speed="60" pauseOnHover="true" gradientWidth="20">
        <div className="scroller-item">
          <img src={god11}></img>
        </div>
        <div className="scroller-item">
          <img src={god1}></img>
        </div>
        <div className="scroller-item">
          <img src={god3}></img>
        </div>
        <div className="scroller-item">
          <img src={god4}></img>
        </div>
        <div className="scroller-item">
          <img src={god9}></img>
        </div>
        <div className="scroller-item">
          <img src={god10}></img>
        </div>
        <div className="scroller-item">
          <img src={god2}></img>
        </div>
        <div className="scroller-item">
          <img src={god12}></img>
        </div>
        <div className="scroller-item">
          <img src={god13}></img>
        </div>
        <div className="scroller-item">
          <img src={god5}></img>
        </div>
        <div className="scroller-item">
          <img src={god15}></img>
        </div>
        <div className="scroller-item">
          <img src={god16}></img>
        </div>
      </Marquee>
    </div>
  );
};

export default Hero;

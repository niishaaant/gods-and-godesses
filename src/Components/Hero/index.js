import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hero.scss";
import gods from "../../utils/gods.mp4";
import logo from "../../utils/siteLogo.png";
import logo3 from "../../utils/siteLogo3.png";
import globuslogo from "../../utils/globus-logo.png";

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
      <GlobusSection />
      <AboutLife2 />
      <Benefits />
    </div>
  );
};

const ActionSection = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="action-section-container">
        <div className="intro-text">
          <div className="introduction-container">
            <div className="website-name">Life2</div>
            <div className="website-tagline">
              Life2.io is an innovative NFT multiverse project that aims to
              provide a transformative digital experience for users by combining
              cutting-edge technology, immersive storytelling, and an engaging
              virtual environment. As the concept of metaverse gains prominence
              and digital life becomes increasingly intertwined with our daily
              routines, we see an opportunity to create a platform that connects
              people through a shared virtual space, transcending the boundaries
              of time, geography, and culture.
              <br></br>
              <div className={showMore ? "contenct more" : "content"}>
                In the beginning, the universe was vast, empty, and devoid of
                life. The eternal beings known as the Architects sought to
                create a new reality, one that would blend the realms of the
                physical and the digital. They channeled their powers into the
                creation of Life2, a multiverse where countless worlds could
                coexist and interact, transcending time and space. The
                Architects carefully crafted worlds inspired by the past,
                present, and future, allowing their creations to evolve and
                flourish. They summoned the Eternal Gods of Egypt, powerful
                beings from an ancient civilization, to watch over the first of
                these worlds. These gods and goddesses formed the cornerstone of
                the Life2 multiverse, guiding its inhabitants and weaving the
                threads of destiny. As time passed, the multiverse continued to
                expand. New worlds emerged, each with their own unique
                characters, cultures, and environments. From the mythical realms
                of ancient Greece and the enchanted forests of medieval Europe
                to the futuristic metropolises of interstellar civilizations,
                the Life2 multiverse became a tapestry of interconnected worlds.
                Within this multiverse, individuals known as the Life2 Pioneers
                discovered their true calling. They embraced their digital
                identities and forged their destinies in these extraordinary
                realms. The Pioneers traversed the worlds of the Life2
                multiverse, meeting new allies and facing unknown challenges,
                all while exploring the furthest reaches of their imagination.
                As the Pioneers unlocked the secrets of the Life2 multiverse,
                they harnessed the power of Globus Smart Coins (GLSC), a
                currency that connected all worlds and enabled them to access
                premium experiences and exclusive privileges. The Pioneers
                traded, collaborated, and thrived, driven by the shared belief
                that they were part of something greater. But the Life2
                multiverse was not without its perils. Dark forces lurked in the
                shadows, seeking to unravel the very fabric of reality. The
                Life2 Pioneers would need to stand together, united by their
                courage, ingenuity, and determination, to confront these
                challenges and ensure the survival of the Life2 multiverse. The
                Life2 project tells the story of a sprawling multiverse filled
                with wonder, mystery, and adventure. It invites users to embark
                on a journey of self-discovery and exploration, forging their
                own path in a digital world that transcends the boundaries of
                time and space.
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
      <div className="about-text-container">
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
          <button style={{ fontSize: "1.2rem" }}>
            <Link to="/roadmap" className="link">
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
        Life2.io is an integral part of the Globuschain Project, a visionary
        initiative that seeks to revolutionize the way people interact with
        digital worlds and assets. This multiverse offers a diverse and
        expansive digital universe, spanning different eras, cultures, and
        dimensions. By purchasing NFTs within the Life2.0 multiverse, users will
        gain exclusive access to participate in the private sale of
        Globuschain's native token, GLSC (Globus Smart Coin). Moreover,
        investors and buyers will enjoy premium treatment and priority access to
        all future Globuschain products and services, along with exclusive
        discounts.<br></br>
        <a href="https://globuschain.com/">
          <button>Visit</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;

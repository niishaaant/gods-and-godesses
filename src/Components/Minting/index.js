import React from "react";
import "./minting.scss";
import gods from "../../utils/IMG_4649.gif";
import goddesses from "../../utils/IMG_4648.gif";

const Minting = () => {
  return (
    <div className="minting-container">
      <div className="about-section">
        <div className="title">
          <div className="background"></div>
          <div className="left"></div>
          <div className="center">
            Etarnal Gods and Godesses of Egypt
            <div className="about">Tagline</div>
            <div className="release-date">
              Coming to you <span style={{ fontWeight: "700" }}>MAY 2023</span>
            </div>
          </div>
          <div className="right"></div>
        </div>

        <hr></hr>
        <div className="action">
          <div className="nft-image">
            <div className="gif">
              <div className="border">
                <img src={goddesses} />
              </div>
            </div>
          </div>
          <div className="buttons">
            Goddesses of Egypt
            <span style={{ fontSize: "1rem", margin: "1rem 1rem" }}>
              Stay tuned
            </span>
            Coming soon!
          </div>
        </div>
        <hr></hr>
        <div className="action">
          <div className="nft-image">
            <div className="gif">
              <div className="border">
                <img src={gods} />
              </div>
            </div>
          </div>
          <div className="buttons">
            Gods of Egypt
            <span style={{ fontSize: "1rem", margin: "1rem 1rem" }}>
              Stay tuned
            </span>
            Coming soon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minting;

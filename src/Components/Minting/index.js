import React from "react";
import "./minting.scss";
import gods from "../../utils/gods.mp4";

const Minting = () => {
  return (
    <div className="minting-container">
      <div className="about-section">
        <div className="title">
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
                <video
                  src={gods}
                  autoPlay
                  muted
                  loop
                  width="350px"
                  height="350px"
                ></video>
              </div>
            </div>
          </div>
          <div className="buttons">
            <span style={{ fontSize: "1rem" }}>Stay tuned</span>
            <br></br>Coming soon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minting;

import React from "react";
import "./minting.scss";
import gods from "../../utils/IMG_4649.gif";
import goddesses from "../../utils/IMG_4648.gif";
import godsLogo from "../../utils/godsLogo.jpg";
import goddessLogo from "../../utils/goddessLogo.jpg";

const Minting = () => {
  return (
    <div className="minting-container">
      <div className="about-section">
        {/* <div className="title">
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
        </div> */}

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
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={goddessLogo} />
              Goddesses of Egypt
            </div>
            <span style={{ fontSize: "1.8rem", marginTop: "1rem" }}>
              Celebrate the divine feminine with the "Eternal Goddess of Egypt"
              NFT collection. Own a piece of history that highlights the
              strength and beauty of goddesses like Isis, Bastet, and Hathor,
              while exploring the mystical world of Ancient Egypt.
            </span>
            <br></br>
            <span style={{ fontSize: "1rem", margin: "0.2rem 1rem" }}>
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={godsLogo} />
              Gods of Egypt
            </div>
            <span style={{ fontSize: "1.8rem", marginTop: "1rem" }}>
              {" "}
              Experience the powerful deities of Ancient Egyptian mythology with
              "Eternal Gods of Egypt" on the Ethereum blockchain. Securely own
              and trade these unique digital assets while immersing in the rich
              world of Ancient Egypt.
            </span>
            <br></br>
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

import React, { useState } from "react";
import styles from "./roadmap.module.scss";
import dot from "../../utils/icons8-dot-67.png";
import check from "../../utils/icons8-checkmark-24.png";

const Roadmap = () => {
  // const [expand, setExpand] = useState(1);
  return (
    <>
      <section className={styles.roadmapSection} id="roadmap">
        <h3>Roadmap</h3>

        <div className={styles.timeline}>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Q2 2023 (April - June)</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>
                    <img
                      src={check}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Launch Website for Project Life2.io Mulriverse .
                  </li>
                  <li>
                    <img
                      src={check}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Develop and finalise the first NFT collection
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Assemble a skilled and Expert team for the proejct .
                  </li>
                  <li>
                    <img
                      src={check}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Establish partnerships for Promotions and collaborations.
                  </li>
                  <li>
                    <img
                      src={check}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Start marketing, promotional activities and Community
                    Development.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Enable minting of Egyptian goddesses NFT collection.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Exclusive access to GLSC (Globus Smart Coin) private sale
                    for NFT holders.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Q3 2023 (July - September)</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Develop and finalise the second NFT collection.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    improve marketing efforts and community engagement
                    strategies.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Further expand partnerships and collaborations
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Enable minting of Second NFT collection.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Exclusive access to GLSC private sale for NFT holders.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Begin development of the Life2 Multiverse platform (Beta).
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Start integration of GLSC tokens as a utility in Life2
                    Multiverse.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Premium treatment and first access to all Life2 NFT and
                    GlLSC holders .
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Q4 2023 (October - December)</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Release the Beta version of the Life2 Multiverse platform.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Collect feedback from early users of the Beta platform
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Develop additional features, gameplay elements, and utility.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Start planning for the expansion of the multiverse.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Exclusive access to GLSC private sale for NFT holders.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Continuous integration of GLSC tokens as a utility within
                    the multiverse.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Premium treatment and first access to all Life2 NFT and
                    GlLSC holders .
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Q1 2024 (JAN - MAR)</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Future era and interplanetary expansion
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Introduce futuristic worlds and interplanetary settings to
                    the multiverse
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Develop new characters, traits, and NFT collections.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Collaborate with artists and creators.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Integrate cutting-edge technologies (e.g., VR, AR).
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Establish partnerships with other platforms and companies.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Continuous integration of GLSC tokens as a utility.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Premium treatment and first access to all Life2 NFT and
                    GlLSC holders .
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Beyond Q1 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Continuous expansion and updates to the multiverse
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Regular introduction of new worlds, characters, and
                    Gameplay.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Incorporation of user feedback and suggestions for
                    improvements
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Ongoing marketing efforts and community engagement.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Exploration of new technologies and partnerships to stay
                    ahead in the rapidly evolving digital landscape
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Continuous integration of GLSC tokens as a utility.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;

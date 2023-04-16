import React, { useState } from "react";
import styles from "./roadmap.module.scss";

const Roadmap = () => {
  const [expand, setExpand] = useState(1);
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
                  <li>Launch Website for Project Life2.io Mulriverse .</li>
                  <li>Develop and finalise the first NFT collection</li>
                  <li>Assemble a skilled and Expert team for the proejct .</li>
                  <li>
                    Establish partnerships for Promotions and collaborations.
                  </li>
                  <li>
                    Start marketing, promotional activities and Community
                    Development.
                  </li>
                  <li>Enable minting of Egyptian goddesses NFT collection.</li>
                  <li>
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
                  <li>Develop and finalise the second NFT collection.</li>
                  <li>
                    improve marketing efforts and community engagement
                    strategies.
                  </li>
                  <li>Further expand partnerships and collaborations</li>
                  <li>Enable minting of Second NFT collection.</li>
                  <li>
                    Exclusive access to GLSC private sale for NFT holders.
                  </li>
                  <li>
                    Begin development of the Life2 Multiverse platform (Beta).
                  </li>
                  <li>
                    Start integration of GLSC tokens as a utility in Life2
                    Multiverse.
                  </li>
                  <li>
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
                    Release the Beta version of the Life2 Multiverse platform.
                  </li>
                  <li>
                    Collect feedback from early users of the Beta platform
                  </li>
                  <li>
                    Develop additional features, gameplay elements, and utility.
                  </li>
                  <li>Start planning for the expansion of the multiverse.</li>
                  <li>
                    Exclusive access to GLSC private sale for NFT holders.
                  </li>
                  <li>
                    Continuous integration of GLSC tokens as a utility within
                    the multiverse.
                  </li>
                  <li>
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
                  <li>Future era and interplanetary expansion</li>
                  <li>
                    Introduce futuristic worlds and interplanetary settings to
                    the multiverse
                  </li>
                  <li>Develop new characters, traits, and NFT collections.</li>
                  <li>Collaborate with artists and creators.</li>
                  <li>Integrate cutting-edge technologies (e.g., VR, AR).</li>
                  <li>
                    Establish partnerships with other platforms and companies.
                  </li>
                  <li>Continuous integration of GLSC tokens as a utility.</li>
                  <li>
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
                  <li>Continuous expansion and updates to the multiverse</li>
                  <li>
                    Regular introduction of new worlds, characters, and
                    Gameplay.
                  </li>
                  <li>
                    Incorporation of user feedback and suggestions for
                    improvements
                  </li>
                  <li>Ongoing marketing efforts and community engagement.</li>
                  <li>
                    Exploration of new technologies and partnerships to stay
                    ahead in the rapidly evolving digital landscape
                  </li>
                  <li>Continuous integration of GLSC tokens as a utility.</li>
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

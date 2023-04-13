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
                  <li>
                    Launch Life2 website: Introduce the project to the public
                    and provide essential information on the multiverse concept,
                    NFT collections, and token utility.
                  </li>
                  <li>
                    {" "}
                    Develop and finalize the first NFT collection of Egyptian
                    goddesses in support of women empowerment and increasing
                    women's participation in the workforce.
                  </li>
                  <li>Enable minting of Egyptian goddesses NFT collection.</li>
                  <li>
                    Assemble a skilled team with expertise in blockchain
                    development, NFTs, marketing, and community management.
                  </li>
                  <li>
                    Establish partnerships with influencers, content creators,
                    and other key players within the NFT, crypto, and gaming
                    communities to promote your project.
                  </li>
                  <li>
                    Kick off marketing and promotional activities to create
                    awareness and build community interest.
                  </li>
                  <li>
                    Exclusive access to GLSC (Globus Smart Coin) private sale
                    for NFT holders.
                  </li>
                  <li>
                    Continuous integration of GLSC tokens as a utility within
                    the multiverse and future projects.
                  </li>
                  <li>
                    Premium treatment and first access to all Globuschain
                    products and services with discounts for GLSC token holders.
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
                    Develop and finalize the second NFT collection of Egyptian
                    gods.
                  </li>
                  <li>Enable minting of Egyptian gods NFT collection.</li>
                  <li>
                    Continuously improve marketing efforts and community
                    engagement strategies.
                  </li>
                  <li>
                    Further expand partnerships and collaborations to strengthen
                    the project's presence in the NFT and crypto space.
                  </li>
                  <li>
                    Begin development of the Life2 Multiverse platform (Beta).
                  </li>
                  <li>
                    Exclusive access to GLSC private sale for NFT holders.
                  </li>
                  <li>
                    Continuous integration of GLSC tokens as a utility within
                    the multiverse and future projects.
                  </li>
                  <li>
                    Premium treatment and first access to all Globuschain
                    products and services with discounts for GLSC token holders.
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
                    Release the Beta version of the Life2 Multiverse platform,
                    allowing users to explore and interact with different worlds
                    and characters.
                  </li>
                  <li>
                    Collect feedback from early users of the Beta platform to
                    identify areas for improvement and optimization.
                  </li>
                  <li>
                    {" "}
                    Develop additional features, gameplay elements, and utility
                    for the NFT holders within the multiverse.
                  </li>
                  <li>
                    Start planning for the expansion of the multiverse,
                    incorporating new worlds, characters, and NFT collections
                    from various eras and cultures.
                  </li>
                  <li>
                    Exclusive access to GLSC private sale for NFT holders.
                  </li>
                  <li>
                    Continuous integration of GLSC tokens as a utility within
                    the multiverse and future projects.
                  </li>
                  <li>
                    Premium treatment and first access to all Globuschain
                    products and services with discounts for GLSC token holders.
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
                    {" "}
                    Introduce futuristic worlds and interplanetary settings to
                    the multiverse
                  </li>
                  <li>
                    Develop new characters, traits, and NFT collections
                    representing these future eras
                  </li>
                  <li>
                    Collaborate with artists and creators to ensure a diverse
                    and engaging experience for users
                  </li>
                  <li>
                    Integrate cutting-edge technologies (e.g., VR, AR) to
                    enhance the user experience
                  </li>
                  <li>
                    {" "}
                    Establish partnerships with other platforms and companies
                    for cross-platform experiences and interoperability
                  </li>
                  <li>
                    Exclusive access to GLSC (Globus Smart Coin) private sale
                    for NFT holders
                  </li>
                  <li>
                    Continuous integration of GLSC tokens as a utility within
                    the multiverse and future projects
                  </li>
                  <li>
                    {" "}
                    Premium treatment and first access to all Globuschain
                    products and services with discounts for GLSC token holders
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
                    {" "}
                    Regular introduction of new worlds, characters, and NFT
                    collections
                  </li>
                  <li>
                    Incorporation of user feedback and suggestions for
                    improvements
                  </li>
                  <li>
                    Ongoing marketing efforts and community engagement to
                    maintain user interest and growth
                  </li>
                  <li>
                    Exploration of new technologies and partnerships to stay
                    ahead in the rapidly evolving digital landscape
                  </li>
                  <li>
                    {" "}
                    Exclusive access to GLSC (Globus Smart Coin) private sale
                    for NFT holders
                  </li>
                  <li>
                    Continuous integration of GLSC tokens as a utility within
                    the multiverse and future projects
                  </li>
                  <li>
                    Premium treatment and first access to all Globuschain
                    products and services with discounts for GLSC token holders
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

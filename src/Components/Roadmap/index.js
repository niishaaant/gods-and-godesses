import React, { useState } from "react";
import styles from "./roadmap.module.scss";
import { Outlet } from "react-router-dom";

const Roadmap = () => {
  const [expand, setExpand] = useState(1);
  return (
    <>
      {/* <div className="roadmap-container">
        <div className={`quator q1 ${expand === 1 ? "active" : ""}`}>
          <div className="expand">
            <button onClick={() => setExpand(1)}>
              {expand === 1 ? "<" : ">"}
            </button>
            <span>1</span>
          </div>
          <div className="content">
            <div className="heading">Q2 2023 (April - June)</div>
            <div className="task-list">
              <ul>
                <li>Launch of Life2.io multiverse and platform</li>
                <li> Release of the first NFT collection: Egyptian Gods</li>
                <li>
                  Collaboration with artists to design unique character art
                </li>
                <li>
                  Develop and mint 10,000 unique Egyptian God NFTs with various
                  traits
                </li>
                <li>
                  Promotional campaigns and marketing efforts to create
                  awareness about the first NFT collection
                </li>
                <li>
                  {" "}
                  Organize auctions, giveaways, and early access sales for the
                  NFTs
                </li>
                <li>
                  Integration of the Egyptian God characters into the multiverse
                </li>
                <li>
                  Exclusive access to GLSC (Globus Smart Coin) private sale for
                  NFT holders
                </li>
                <li>
                  {" "}
                  Continuous integration of GLSC tokens as a utility within the
                  multiverse and future projects
                </li>
                <li>
                  {" "}
                  Premium treatment and first access to all Globuschain products
                  and services with discounts for GLSC token holders
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`quator q2 ${expand === 2 ? "active" : ""}`}>
          <div className="expand">
            <button onClick={() => setExpand(2)}>
              {expand === 2 ? "<" : ">"}
            </button>
            <span>2</span>
          </div>
          <div className="content">
            <div className="heading">Q3 2023 (July - September)</div>
            <div className="task-list">
              <ul>
                <li>
                  Release of the second NFT collection: Egyptian Goddesses
                </li>
                <li>
                  {" "}
                  Collaboration with artists to design unique character art
                </li>
                <li>
                  Develop and mint 10,000 unique Egyptian Goddess NFTs with
                  various traits
                </li>
                <li>
                  Promotional campaigns and marketing efforts to create
                  awareness about the second NFT collection
                </li>
                <li>
                  Organize auctions, giveaways, and early access sales for the
                  NFTs
                </li>
                <li>
                  {" "}
                  Integration of the Egyptian Goddess characters into the
                  multiverse
                </li>
                <li>
                  Enhance social interaction features and in-world events for
                  community building
                </li>
                <li>
                  Exclusive access to GLSC (Globus Smart Coin) private sale for
                  NFT holders
                </li>
                <li>
                  {" "}
                  Continuous integration of GLSC tokens as a utility within the
                  multiverse and future projects
                </li>
                <li>
                  {" "}
                  Premium treatment and first access to all Globuschain products
                  and services with discounts for GLSC token holders
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`quator q3 ${expand === 3 ? "active" : ""}`}>
          <div className="expand">
            <button onClick={() => setExpand(3)}>
              {expand === 3 ? "<" : ">"}
            </button>
            <span>3</span>
          </div>
          <div className="content">
            <div className="heading">Q4 2023 (October - December)</div>
            <div className="task-list">
              <ul>
                <li>
                  {" "}
                  Expansion of the multiverse: Introduction of other ancient
                  cultures
                </li>
                <li>
                  {" "}
                  Research and design new worlds based on various ancient
                  civilizations
                </li>
                <li>Develop new characters and traits for the new worlds</li>
                <li>
                  Release additional NFT collections to represent these new
                  civilizations
                </li>
                <li>
                  Continuous improvements to the platform, user experience, and
                  performance optimization
                </li>
                <li>
                  {" "}
                  Exclusive access to GLSC (Globus Smart Coin) private sale for
                  NFT holders
                </li>
                <li>
                  Continuous integration of GLSC tokens as a utility within the
                  multiverse and future projects
                </li>
                <li>
                  Premium treatment and first access to all Globuschain products
                  and services with discounts for GLSC token holders
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`quator q4 ${expand === 4 ? "active" : ""}`}>
          <div className="expand">
            <button onClick={() => setExpand(4)}>
              {expand === 4 ? "<" : ">"}
            </button>
            <span>4</span>
          </div>
          <div className="content">
            <div className="heading">Q1 2024 (JAN - MAR)</div>
            <div className="task-list">
              <ul>
                <li>Future era and interplanetary expansion</li>
                <li>
                  {" "}
                  Introduce futuristic worlds and interplanetary settings to the
                  multiverse
                </li>
                <li>
                  Develop new characters, traits, and NFT collections
                  representing these future eras
                </li>
                <li>
                  Collaborate with artists and creators to ensure a diverse and
                  engaging experience for users
                </li>
                <li>
                  Integrate cutting-edge technologies (e.g., VR, AR) to enhance
                  the user experience
                </li>
                <li>
                  {" "}
                  Establish partnerships with other platforms and companies for
                  cross-platform experiences and interoperability
                </li>
                <li>
                  Exclusive access to GLSC (Globus Smart Coin) private sale for
                  NFT holders
                </li>
                <li>
                  Continuous integration of GLSC tokens as a utility within the
                  multiverse and future projects
                </li>
                <li>
                  {" "}
                  Premium treatment and first access to all Globuschain products
                  and services with discounts for GLSC token holders
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`quator q5 ${expand === 5 ? "active" : ""}`}>
          <div className="expand">
            <button onClick={() => setExpand(5)}>
              {expand === 5 ? "<" : ">"}
            </button>
            <span>5</span>
          </div>
          <div className="content">
            <div className="heading">Beyond Q1 2024</div>
            <div className="task-list">
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
                  Ongoing marketing efforts and community engagement to maintain
                  user interest and growth
                </li>
                <li>
                  Exploration of new technologies and partnerships to stay ahead
                  in the rapidly evolving digital landscape
                </li>
                <li>
                  {" "}
                  Exclusive access to GLSC (Globus Smart Coin) private sale for
                  NFT holders
                </li>
                <li>
                  Continuous integration of GLSC tokens as a utility within the
                  multiverse and future projects
                </li>
                <li>
                  Premium treatment and first access to all Globuschain products
                  and services with discounts for GLSC token holders
                </li>
              </ul>
            </div>
          </div>
        </div> 
      </div> */}

      <section className={styles.roadmapSection} id="roadmap">
        <h3>Roadmap</h3>

        <div className={styles.timeline}>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Q2 2023 (April - June)</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Launch of Life2.io multiverse and platform</li>
                  <li> Release of the first NFT collection: Egyptian Gods</li>
                  <li>
                    Collaboration with artists to design unique character art
                  </li>
                  <li>
                    Develop and mint 10,000 unique Egyptian God NFTs with
                    various traits
                  </li>
                  <li>
                    Promotional campaigns and marketing efforts to create
                    awareness about the first NFT collection
                  </li>
                  <li>
                    {" "}
                    Organize auctions, giveaways, and early access sales for the
                    NFTs
                  </li>
                  <li>
                    Integration of the Egyptian God characters into the
                    multiverse
                  </li>
                  <li>
                    Exclusive access to GLSC (Globus Smart Coin) private sale
                    for NFT holders
                  </li>
                  <li>
                    {" "}
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
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Q3 2023 (July - September)</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>
                    Release of the second NFT collection: Egyptian Goddesses
                  </li>
                  <li>
                    {" "}
                    Collaboration with artists to design unique character art
                  </li>
                  <li>
                    Develop and mint 10,000 unique Egyptian Goddess NFTs with
                    various traits
                  </li>
                  <li>
                    Promotional campaigns and marketing efforts to create
                    awareness about the second NFT collection
                  </li>
                  <li>
                    Organize auctions, giveaways, and early access sales for the
                    NFTs
                  </li>
                  <li>
                    {" "}
                    Integration of the Egyptian Goddess characters into the
                    multiverse
                  </li>
                  <li>
                    Enhance social interaction features and in-world events for
                    community building
                  </li>
                  <li>
                    Exclusive access to GLSC (Globus Smart Coin) private sale
                    for NFT holders
                  </li>
                  <li>
                    {" "}
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
            <div className={styles.date}>Q4 2023 (October - December)</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>
                    {" "}
                    Expansion of the multiverse: Introduction of other ancient
                    cultures
                  </li>
                  <li>
                    {" "}
                    Research and design new worlds based on various ancient
                    civilizations
                  </li>
                  <li>Develop new characters and traits for the new worlds</li>
                  <li>
                    Release additional NFT collections to represent these new
                    civilizations
                  </li>
                  <li>
                    Continuous improvements to the platform, user experience,
                    and performance optimization
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

import React from "react";
import "./collection.scss";
import gods from "../../utils/gods.mp4";
import { Link } from "react-router-dom";
import Minting from "../Minting";

const Collection = () => {
  return (
    <div className="collection-container">
      <div className="banner-container">
        <div className="banner"></div>
      </div>
      {/* <div className="introduction">
        <span>
          <span className="heading">The Life2.io multiverse</span>
          <br></br> is a vast, interconnected digital landscape that encompasses
          a diverse range of worlds, each inspired by different eras, cultures,
          and mythologies.
        </span>
        <hr></hr>
        <span>
          The past era includes worlds inspired by ancient civilizations such as
          Egypt, Greece, and Rome, where users can engage with characters such
          as gods and goddesses, legendary heroes, and mythical creatures. The
          present era features contemporary worlds based on modern cities,
          cultural landmarks, and natural wonders, allowing users to experience
          the diversity and richness of our current reality. The future era
          transports users to imaginative realms where advanced technology,
          extraterrestrial life, and futuristic societies coexist, opening up
          new possibilities and adventures.
        </span>
      </div>
      <div className="about">
        <div className="heading">Characters and Traits</div>A key aspect of the
        Life2.io multiverse is the diverse range of characters and traits
        available as NFTs, allowing users to personalize their digital
        experience and enhance their sense of immersion within the various
        worlds. Characters in our multiverse hail from a myriad of backgrounds,
        spanning different eras, cultures, and realms. These unique digital
        beings not only serve as avatars for users but also help bring the
        multiverse to life through their individual stories, attributes, and
        interactions.<br></br>
        The role of characters and traits in Life2.io extends beyond mere
        customization, however. They also serve as a means of facilitating
        social interactions, trade, and collaboration within the multiverse. By
        acquiring and trading characters and traits, users can form alliances,
        participate in challenges, and create shared experiences with others,
        fostering a sense of camaraderie and belonging within the community.
      </div>
      <div className="collection-showcase">
        <div className="collection-images">
          <div className="gif">
            <div className="border">
              <video
                src={gods}
                autoPlay
                muted
                loop
                width="300px"
                height="300px"
              ></video>
            </div>
          </div>
        </div>
        <div className="collection-description">
          <div className="heading">Etarnal Gods and Godesses of Egypt</div>
          <div className="charecter-line">
            𓂝𓏏𓏭𓏛𓇾𓏏𓅓𓅱𓀀𓁐𓏪𓃀𓌢𓌢𓈖𓈖𓏛𓁷𓏤𓎟𓀀𓁐𓏥𓃀𓈖𓌱𓅓𓎛𓅱𓀔𓈖𓌱𓅓𓎛𓇋𓇋𓏏𓁐𓐍𓂋𓋴𓂝𓎛𓋩𓉔𓊪𓏛𓋴𓐠𓄿𓂋𓏏𓌗𓀁𓌷𓂝
          </div>
          One of the fundamental principles of Life2.io is to create an
          inclusive and accessible platform that caters to users of all age
          groups, interests, and backgrounds. We recognize the importance of
          designing a multiverse that offers tailored experiences and gameplay
          options to ensure that every user feels welcomed and engaged,
          regardless of their age or skill level.
          <br></br>
          <br></br>
          <div className="call-to-action">
            <button>GET YOURS TODAY</button>
          </div>
        </div>
      </div> */}
      <Minting />
      <div className="future-collections">
        <div className="heading">Future Collections</div>
        <div className="about-future-collections">
          <div className="egypt">
            <div className="back"></div>
            <div className="name">Egyptian Gods</div>
            <div className="date">Coming MAY 2023</div>
          </div>
          <div className="greece">
            <div className="back"></div>
            <div className="name">Greek Gods</div>
            <div className="date">Coming soon</div>
          </div>
          <div className="rome">
            <div className="back"></div>
            <div className="name">Roman Gods</div>
            <div className="date">Coming soon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

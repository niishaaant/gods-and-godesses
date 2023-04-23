import React, { useState, useRef } from "react";
import "./roadmap.scss";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import dot from "../../utils/icons8-dot-67.png";
import check from "../../utils/icons8-checkmark-24.png";

const Roadmap = () => {
  // const [expand, setExpand] = useState(1);
  const position = {
    position: [1, 4, 6],
  };
  return (
    <>
      {/* <section className={styles.roadmapSection} id="roadmap">
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
                    <div>Launch Website for Project Life2.io Mulriverse .</div>
                  </li>
                  <li>
                    <img
                      src={check}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>Develop and finalise the first NFT collection</div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Assemble a skilled and Expert team for the proejct .
                    </div>
                  </li>
                  <li>
                    <img
                      src={check}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Establish partnerships for Promotions and collaborations.
                    </div>
                  </li>
                  <li>
                    <img
                      src={check}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Start marketing, promotional activities and Community
                    </div>
                    Development.
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Enable minting of Egyptian goddesses NFT collection.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Exclusive access to GLSC (Globus Smart Coin) private sale
                    </div>
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
                    <div>Develop and finalise the second NFT collection.</div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      improve marketing efforts and community engagement
                      strategies.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>Further expand partnerships and collaborations</div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>Enable minting of Second NFT collection.</div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Exclusive access to GLSC private sale for NFT holders.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Begin development of the Life2 Multiverse platform (Beta).
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Start integration of GLSC tokens as a utility in Life2
                      Multiverse.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Premium treatment and first access to all Life2 NFT and
                      GlLSC holders .
                    </div>
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
                    <div>
                      Release the Beta version of the Life2 Multiverse platform.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Collect feedback from early users of the Beta platform
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Develop additional features, gameplay elements, and
                      utility.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Start planning for the expansion of the multiverse.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Exclusive access to GLSC private sale for NFT holders.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Continuous integration of GLSC tokens as a utility within
                      the multiverse.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Premium treatment and first access to all Life2 NFT and
                      GlLSC holders .
                    </div>
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
                    <div>Future era and interplanetary expansion</div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Introduce futuristic worlds and interplanetary settings to
                      the multiverse
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Develop new characters, traits, and NFT collections.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>Collaborate with artists and creators.</div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Integrate cutting-edge technologies (e.g., VR, AR).
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Establish partnerships with other platforms and companies.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Continuous integration of GLSC tokens as a utility.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Premium treatment and first access to all Life2 NFT and
                      GlLSC holders .
                    </div>
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
                    <div>
                      Continuous expansion and updates to the multiverse
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Regular introduction of new worlds, characters, and
                      Gameplay.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Incorporation of user feedback and suggestions for
                      improvements
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Ongoing marketing efforts and community engagement.
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Exploration of new technologies and partnerships to stay
                      ahead in the rapidly evolving digital landscape
                    </div>
                  </li>
                  <li>
                    <img
                      src={dot}
                      width="15px"
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    <div>
                      Continuous integration of GLSC tokens as a utility.
                    </div>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <div className="roadmap-container">
        <div className="content-container">
          <div className="q q2">
            <div className="header">Q2 2023</div>
            <div className="content">
              <ul>
                <li>
                  <img
                    src={check}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Launch Website for Project Life2.io Mulriverse .</div>
                </li>
                <li>
                  <img
                    src={check}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Develop and finalise the first NFT collection</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Assemble a skilled and Expert team for the proejct .
                  </div>
                </li>
                <li>
                  <img
                    src={check}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Establish partnerships for Promotions and collaborations.
                  </div>
                </li>
                <li>
                  <img
                    src={check}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Start marketing, promotional activities and Community
                    Development.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Enable minting of Egyptian goddesses NFT collection.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Exclusive access to GLSC (Globus Smart Coin) private sale
                    for NFT holders.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="q q3">
            <div className="header">Q3 2023</div>
            <div className="content">
              <ul>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Develop and finalise the second NFT collection.</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    improve marketing efforts and community engagement
                    strategies.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Further expand partnerships and collaborations</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Enable minting of Second NFT collection.</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Exclusive access to GLSC private sale for NFT holders.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Begin development of the Life2 Multiverse platform (Beta).
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Start integration of GLSC tokens as a utility in Life2
                    Multiverse.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Premium treatment and first access to all Life2 NFT and
                    GlLSC holders .
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="q q4">
            <div className="header">Q4 2023</div>
            <div className="content">
              <ul>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Release the Beta version of the Life2 Multiverse platform.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Collect feedback from early users of the Beta platform
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Develop additional features, gameplay elements, and utility.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Start planning for the expansion of the multiverse.</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Exclusive access to GLSC private sale for NFT holders.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Continuous integration of GLSC tokens as a utility within
                    the multiverse.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Premium treatment and first access to all Life2 NFT and
                    GlLSC holders .
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="q q1">
            <div className="header">Q1 2024</div>
            <div className="content">
              <ul>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Future era and interplanetary expansion</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Introduce futuristic worlds and interplanetary settings to
                    the multiverse
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Develop new characters, traits, and NFT collections.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Collaborate with artists and creators.</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Integrate cutting-edge technologies (e.g., VR, AR).</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Establish partnerships with other platforms and companies.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Continuous integration of GLSC tokens as a utility.</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Premium treatment and first access to all Life2 NFT and
                    GlLSC holders .
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="q q1b">
            <div className="header">Beyond Q1 2024</div>
            <div className="content">
              <ul>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Continuous expansion and updates to the multiverse</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Regular introduction of new worlds, characters, and
                    Gameplay.
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Incorporation of user feedback and suggestions for
                    improvements
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Ongoing marketing efforts and community engagement.</div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>
                    Exploration of new technologies and partnerships to stay
                    ahead in the rapidly evolving digital landscape
                  </div>
                </li>
                <li>
                  <img
                    src={dot}
                    width="15px"
                    height="15px"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Continuous integration of GLSC tokens as a utility.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="canvas">
          <Canvas camera={position} style={{ height: "40vh", width: "30vw" }}>
            <ambientLight />
            <pointLight position={[100, 50, 0]} />
            <FbxViewer path="/ezyZip/egypt_all.fbx" />
          </Canvas>
        </div> */}
      </div>
    </>
  );
};

// function FbxViewer(props) {
//   const fbxRef = useRef();
//   const fbx = useLoader(FBXLoader, props.path);

//   // useFrame(({ camera }) => {
//   //   console.log(camera.position);
//   //   if (fbxRef.current) {
//   //     fbxRef.current.rotation.y += 0.01;
//   //   }
//   // });

//   return (
//     <mesh ref={fbxRef} scale={[0.002, 0.002, 0.002]}>
//       <primitive object={fbx} />
//     </mesh>
//   );
// }

export default Roadmap;

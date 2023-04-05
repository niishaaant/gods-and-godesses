import React, { useState } from "react";
import "./raodmap.scss";

const Roadmap = () => {
  const [expand, setExpand] = useState(1);
  return (
    <div className="roadmap-container">
      <div className={`quator q1 ${expand === 1 ? "active" : ""}`}>
        <div className="expand">
          <button onClick={setExpand(1)}>{">"}</button>
          <span>1</span>
        </div>
      </div>
      <div className={`quator q2 ${expand === 2 ? "active" : ""}`}>
        <div className="expand">
          <button onClick={setExpand(1)}>{">"}</button>
          <span>2</span>
        </div>
      </div>
      <div className={`quator q3 ${expand === 3 ? "active" : ""}`}>
        <div className="expand">
          <button onClick={setExpand(1)}>{">"}</button>
          <span>3</span>
        </div>
      </div>
      <div className={`quator q4 ${expand === 4 ? "active" : ""}`}>
        <div className="expand">
          <button onClick={setExpand(1)}>{">"}</button>
          <span>4</span>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

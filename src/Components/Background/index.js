import React from "react";
import "./background.scss";

const Background = ({ children }) => {
  return (
    <div className="background-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default Background;

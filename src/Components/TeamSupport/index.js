import React from "react";
import "./team.scss";

const TeamSupport = () => {
  return (
    <div className="team-support-container">
      <Team />
      <Support />
    </div>
  );
};

const Team = () => {
  return (
    <div className="team-container">
      <div className="member-container one">
        <div className="member-image"></div>
        <div className="info">
          <div className="member-name">DEF Gupta</div>
          <div className="member-position">CTO</div>
        </div>
      </div>
      <div className="member-container two">
        <div className="member-image"></div>
        <div className="info">
          <div className="member-name">DEF Gupta</div>
          <div className="member-position">CTO</div>
        </div>
      </div>
      <div className="member-container three">
        <div className="member-image"></div>
        <div className="info">
          <div className="member-name">DEF Gupta</div>
          <div className="member-position">CTO</div>
        </div>
      </div>
      <div className="member-container four">
        <div className="member-image"></div>
        <div className="info">
          <div className="member-name">DEF Gupta</div>
          <div className="member-position">CTO</div>
        </div>
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="text">Please do leave a message.</div>
        <input type="text" className="name" placeholder="Name"></input>
        <input type="email" className="email" placeholder="Email"></input>
        <input type="text" className="message" placeholder="Message"></input>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TeamSupport;

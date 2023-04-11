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
          <div className="member-name">OSIRIS</div>
          <div className="member-position">
            CEO, Strategy Management & Creative Head
          </div>
        </div>
      </div>
      <div className="member-container two">
        <div className="member-image"></div>
        <div className="info">
          <div className="member-name">ANHUR</div>
          <div className="member-position">HR & Admin Management</div>
        </div>
      </div>
      <div className="member-container three">
        <div className="member-image"></div>
        <div className="info">
          <div className="member-name">ISIS</div>
          <div className="member-position">
            Social Media & Marketing Management
          </div>
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
        <textarea
          type="text"
          className="message"
          placeholder="Message"
        ></textarea>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TeamSupport;

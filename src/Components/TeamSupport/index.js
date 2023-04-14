import React from "react";
import "./team.scss";

const TeamSupport = () => {
  return (
    <div className="team-support-container">
      <Team />
      <hr></hr>
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
          <div className="member-name heading">OSIRIS</div>
          <div className="member-position">
            CEO, Strategy Management & Creative Head
          </div>
        </div>
      </div>
      <div className="member-container two">
        <div className="member-image"></div>
        <div className="info">
          <div className="member-name heading">ANHUR</div>
          <div className="member-position">
            Social Media & Marketing Management
          </div>
        </div>
      </div>
      <div className="member-container three">
        <div className="member-image"></div>
        <div className="info">
          <div className="member-name heading">ISIS</div>
          <div className="member-position">HR & Admin Management</div>
        </div>
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div className="form-container">
      <div id="mc_embed_signup">
        <form
          action="https://life2.us10.list-manage.com/subscribe/post?u=2fd3861a1fe3a76da5bebe524&amp;id=219375e828&amp;f_id=003ccbe5f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
          style={{ backgroundColor: "transparent", color: "#fff" }}
        >
          <div
            id="mc_embed_signup_scroll"
            style={{ backgroundColor: "transparent" }}
          >
            <h2>Please leave your queries here.</h2>
            <div class="indicates-required">
              <span class="asterisk">*</span> indicates required
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                required
                style={{ height: "1.5rem", color: "#fff" }}
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-FNAME">
                Name <span class="asterisk">*</span>
              </label>
              <input
                type="text"
                name="FNAME"
                class="required"
                id="mce-FNAME"
                required
                style={{ height: "1.5rem", color: "#fff" }}
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-MMERGE6">Query</label>
              <textarea
                type="text"
                name="MMERGE6"
                class=""
                id="mce-MMERGE6"
                style={{ height: "6rem", color: "#fff" }}
              />
            </div>
            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_2fd3861a1fe3a76da5bebe524_219375e828"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamSupport;

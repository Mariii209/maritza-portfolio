import React from "react";
import "./Information.css";

export default function Information() {
  return (
    <div className="Information">
      <div className="Contact-info">
        <h6>Contact Information</h6>
        <div className="Email">
          <i className="fa-solid fa-envelope"></i>
          <p>maritza.gutierrez115@gmail.com</p>
        </div>
        <div className="Location">
          <i className="fa-solid fa-location-dot"></i>
          <p>Modesto, CA</p>
        </div>
      </div>
      <div className="Available">
        <h6>Available for Opportunities</h6>
        <p>
          I'm currently seeking junior front-end developer positions and would
          love to hear about yours.
        </p>
        <div className="Available-links">
          <a href="/" className="Schedule">
            Schedule a Call
          </a>
          <a href="/" className="Download-resume">
            <i className="fa-solid fa-download"></i>
            Download Resume
          </a>
        </div>
      </div>

      <div className="Response-time">
        <h6>Response Time</h6>
        <p>
          I typically respond to messages within 24 hours. Looking forward to
          hearing from you!
        </p>
      </div>
    </div>
  );
}

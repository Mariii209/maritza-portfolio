import React from "react";
import "./Information.css";

export default function Information() {
  return (
    <section className="Information">
      <div className="Contact-info">
        <h6>Contact Information</h6>

        <a
          href="mailto:maritza.gutierrez115@gmail.com"
          title="Email me"
          target="_blank"
          rel="noopener noreferrer"
          className="Email"
        >
          <i className="fa-solid fa-envelope"></i>
          <p>maritza.gutierrez115@gmail.com</p>
        </a>

        <div className="Location">
          <i className="fa-solid fa-location-dot"></i>
          <p>California</p>
        </div>
      </div>
      <div className="Available">
        <h6>Available for Opportunities</h6>
        <p>
          I'm currently seeking junior front-end developer positions and would
          love to hear about yours.
        </p>

        <a
          className="Download-resume"
          href="/Maritza_Gutierrez_Resume.pdf"
          download="Maritza_Gutierrez_Resume.pdf"
          aria-label="Download Resume"
        >
          <i className="fa-solid fa-download"></i>
          Download Resume
        </a>
      </div>

      <div className="Response-time">
        <h6>Response Time</h6>
        <p>
          I typically respond to messages within 24 hours. Looking forward to
          hearing from you!
        </p>
      </div>
    </section>
  );
}

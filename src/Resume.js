import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <section className="Resume" id="resume">
      <h2>Resume</h2>
      <p className="About-resume">
        Download my resume to learn more about my experience, skills, and
        passion for front-end development.
      </p>
      <div className="Information">
        <a
          href="/Maritza_Gutierrez_Resume.pdf"
          download="Maritza_Gutierrez_Resume.pdf"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          className="Dark"
        >
          <i className="fa-solid fa-download"></i>
          <p>Download PDF</p>
        </a>
        <a
          href="mailto:maritza.gutierrez115@gmail.com"
          title="Email me"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-envelope"></i>
          <p>Contact Me</p>
        </a>
      </div>
      <div></div>
    </section>
  );
}

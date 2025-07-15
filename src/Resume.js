import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="Resume" id="resume">
      <h1>Resume</h1>
      <p className="About-resume">
        Download my resume to learn more about my background, skills, and
        enthusiasm for front-end development.
      </p>
      <div className="Information">
        <a href="/" className="Dark">
          <i className="fa-solid fa-download"></i>
          <p>Download PDF</p>
        </a>
        <a href="/">
          <i className="fa-solid fa-envelope"></i>
          <p>Contact Me</p>
        </a>
      </div>
      <div></div>
    </div>
  );
}

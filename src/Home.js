import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <main className="Home" id="home">
      <header>
        <h1>Maritza Gutierrez</h1>
        <h6>Junior Front-End Developer</h6>
      </header>

      <p className="Home-description">
        Recent bootcamp graduate with a passion for creating beautiful,
        responsive web applications. Ready to contribute to meaningful projects
        and grow as a developer in a collaborative team environment.
      </p>

      <div className="Home-links">
        <a href="/" className="Home-links__item Item-dark">
          <p>View My Projects</p>
        </a>
        <a
          href="/"
          download
          className="Home-links__item"
          aria-label="Download Resume"
        >
          <i className="fa-solid fa-download"></i>
          <p>Download Resume</p>
        </a>
        <a href="/" className="Home-links__item">
          <p>Get In Touch</p>
        </a>
      </div>
      <div className="Home-socials">
        <a href="/">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="/">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
      <i className="fa-solid fa-arrow-down Down-arrow"></i>
    </main>
  );
}

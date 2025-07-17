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
        Bootcamp graduate with a passion for creating beautiful, responsive web
        applications. Eager to contribute to meaningful projects and grow as a
        developer in a collaborative team environment.
      </p>

      <div className="Home-links">
        <a
          href="#projects"
          className="Home-links__item Item-dark"
          rel="noopener noreferrer"
        >
          <p>View My Projects</p>
        </a>
        <a
          href="/Maritza_Gutierrez_Resume.pdf"
          download="Maritza_Gutierrez_Resume.pdf"
          className="Home-links__item"
          aria-label="Download Resume"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-download"></i>
          <p>Download Resume</p>
        </a>
        <a
          href="#contact"
          className="Home-links__item"
          rel="noopener noreferrer"
        >
          <p>Get In Touch</p>
        </a>
      </div>
      <div className="Home-socials">
        <a
          href="https://github.com/Mariii209"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/maritza-gutierrez-165618343/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:maritza.gutierrez115@gmail.com"
          title="Email me"
          rel="noopener noreferrer"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
      <i className="fa-solid fa-arrow-down Down-arrow"></i>
    </main>
  );
}

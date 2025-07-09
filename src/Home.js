import React from "react";

export default function Home() {
  return (
    <div className="Home">
      <h1>Maritza Gutierrez</h1>
      <h6>Junior Front-End Developer</h6>
      <p>
        Recent bootcamp graduate with a passion for creating beautiful,
        responsive web applications. Ready to contribute to meaningful projects
        and grow as a developer in a collaborative team environment.
      </p>
      <div>
        <div>
          <a href="/">View My Projects</a>
        </div>
        <div>
          <i class="fa-solid fa-download"></i>
          <a href="/">Download Resume</a>
        </div>
        <div>
          <a href="/">Get In Touch</a>
        </div>
      </div>
      <div>
        <a href="/">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="/">
          <i class="fa-regular fa-envelope"></i>
        </a>
      </div>
      <i class="fa-solid fa-arrow-down"></i>
    </div>
  );
}

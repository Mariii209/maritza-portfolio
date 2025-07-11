import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <p className="All-projects">
        Here are some projects I've built during my bootcamp and personal
        learning journey. Each project represents a step forward in my
        development skills.
      </p>
      <div className="Project-section">
        <div className="Project-container">
          <img src="./WeatherApp.jpeg" alt="Weather App" />
          <div className="Project-info">
            <h5>Weather App</h5>
            <p className="Project-description">
              A clean, responsive weather application that displays current
              conditions and forecasts. One of my first projects working with
              external APIs and modern CSS techniques.
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Weather API</li>
              <li>React</li>
            </ul>
            <div className="Project-links">
              <a href="/" className="Project-link">
                <i class="fa-brands fa-github"></i>
                <p>Code</p>
              </a>
              <a href="/" className="Project-link Dark">
                <i class="fa-solid fa-arrow-up-right-from-square Light"></i>
                <p className="Light">Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        <div className="Project-container">
          <img src="./WeatherApp.jpeg" alt="Weather App" />
          <div className="Project-info">
            <h5>Weather App</h5>
            <p className="Project-description">
              A clean, responsive weather application that displays current
              conditions and forecasts. One of my first projects working with
              external APIs and modern CSS techniques.
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Weather API</li>
              <li>React</li>
            </ul>
            <div className="Project-links">
              <a href="/" className="Project-link">
                <i class="fa-brands fa-github"></i>
                <p>Code</p>
              </a>
              <a href="/" className="Project-link Dark">
                <i class="fa-solid fa-arrow-up-right-from-square Light"></i>
                <p className="Light">Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        <div className="Project-container">
          <img src="./WeatherApp.jpeg" alt="Weather App" />
          <div className="Project-info">
            <h5>Weather App</h5>
            <p className="Project-description">
              A clean, responsive weather application that displays current
              conditions and forecasts. One of my first projects working with
              external APIs and modern CSS techniques.
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Weather API</li>
              <li>React</li>
            </ul>
            <div className="Project-links">
              <a href="/" className="Project-link">
                <i class="fa-brands fa-github"></i>
                <p>Code</p>
              </a>
              <a href="/" className="Project-link Dark">
                <i class="fa-solid fa-arrow-up-right-from-square Light"></i>
                <p className="Light">Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        <div className="Project-container">
          <img src="./WeatherApp.jpeg" alt="Weather App" />
          <div className="Project-info">
            <h5>Weather App</h5>
            <p className="Project-description">
              A clean, responsive weather application that displays current
              conditions and forecasts. One of my first projects working with
              external APIs and modern CSS techniques.
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Weather API</li>
              <li>React</li>
            </ul>
            <div className="Project-links">
              <a href="/" className="Project-link">
                <i class="fa-brands fa-github"></i>
                <p>Code</p>
              </a>
              <a href="/" className="Project-link Dark">
                <i class="fa-solid fa-arrow-up-right-from-square Light"></i>
                <p className="Light">Live Demo</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="Projects-coming">
        More projects coming soon! I'm constantly working on new ideas and
        expanding my portfolio.
      </p>
      <a href="/" className="More-project">
        <i class="fa-brands fa-github"></i>
        <p>View All on GitHub</p>
      </a>
    </div>
  );
}

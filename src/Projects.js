import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
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
              <a
                href="https://github.com/Mariii209/react-weather"
                className="Project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                <p>Code</p>
              </a>
              <a
                href="https://weather-app-mariii.netlify.app/"
                className="Project-link Dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square Light"></i>
                <p className="Light">Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        <div className="Project-container">
          <img src="./Dictionary.jpeg" alt="Dictionary App" />
          <div className="Project-info">
            <h5>Dictionary App</h5>
            <p className="Project-description">
              A sleek and user-friendly dictionary app that delivers
              definitions, examples, and images using multiple APIs. Built with
              React, Bootstrap, and modern CSS techniques.
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Image API</li>
              <li>Dictionary API</li>
              <li>React</li>
            </ul>
            <div className="Project-links">
              <a
                href="https://github.com/Mariii209/dictionary-project-react"
                className="Project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                <p>Code</p>
              </a>
              <a
                href="https://dictionary-mariii.netlify.app/"
                className="Project-link Dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square Light"></i>
                <p className="Light">Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        <div className="Project-container">
          <img src="./CyberStore.jpeg" alt="Cyber Store (In Progress)" />
          <div className="Project-info">
            <h5>Cyber Store (In Progress)</h5>
            <p className="Project-description">
              This project is still a work in progress and not finished yet. I’m
              building a responsive e-commerce website based on a Figma design.
              I’m practicing React, component structuring, responsive layouts —
              and I’m also working on adding product data, search, filtering,
              and shopping cart features.
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React & React Router</li>
              <li>Figma</li>
            </ul>
            <div className="Project-links">
              <a
                href="https://github.com/Mariii209/cyber-store"
                className="Project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                <p>Code</p>
              </a>
              <a
                href="https://cyber-store-project.netlify.app/"
                className="Project-link Dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square Light"></i>
                <p className="Light">Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        <div className="Project-container">
          <img src="./AI-ChatBox.jpeg" alt="AI ChatBox" />
          <div className="Project-info">
            <h5>AI ChatBox</h5>
            <p className="Project-description">
              A dynamic AI-powered chatbot application that leverages an
              external API to deliver intelligent responses. This project helped
              me practice working with API integration, JavaScript logic, and
              responsive design.
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>External API</li>
              <li>React</li>
            </ul>
            <div className="Project-links">
              <a
                href="https://github.com/Mariii209/ai-project"
                className="Project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                <p>Code</p>
              </a>
              <a
                href="https://mariii-ai-generator-project.netlify.app/"
                className="Project-link Dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square Light"></i>
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
      <a
        href="https://github.com/Mariii209?tab=repositories"
        className="More-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
        <p>View All on GitHub</p>
      </a>
    </div>
  );
}

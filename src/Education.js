import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div className="Education">
      <h2>Education & Learning Journey</h2>
      <p className="My-path">
        My path into front-end development, including formal training,
        self-directed learning, and transferable skills from my previous
        experience.
      </p>
      <div className="Education-learning-journey">
        <section>
          <div>
            <div className="Cap">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
          </div>
          <div className="Journey-container">
            <h5>Front-End Development Bootcamp</h5>
            <p className="Title">SheCodes Front-End Program</p>
            <p className="Description">
              Intensive 8-month program covering modern front-end development
              technologies and best practices. Completed multiple real-world
              projects and worked in collaborative environments.
            </p>
            <div className="Stats">
              <div className="Stat">
                <p className="Stat-value">9</p>
                <p className="Stat-label">Projects Completed</p>
              </div>
              <div className="Stat">
                <p className="Stat-value">480+</p>
                <p className="Stat-label">Hours of Training</p>
              </div>
            </div>
            <div className="Skills-learned">
              <h6>Technical Skills Learned:</h6>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React & JSX</li>
                <li>Responsive Design</li>
                <li>API Integration</li>
                <li>Git & GitHub</li>
                <li>Hosting & Deployment</li>
                <li>SEO</li>
                <li>AI Tools</li>
                <li>Bootstrap</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="Growing">
              <i className="fas fa-chevron-left Learning"></i>
              <i className="fas fa-chevron-right Learning"></i>
            </div>
          </div>
          <div className="Journey-container">
            <h5>Self-Directed Learning</h5>
            <p className="Title">Online Platforms & Resources</p>
            <p className="Description">
              I’ve been expanding my front-end development skills outside of
              SheCodes by working on personal projects and using online
              tutorials to go deeper into tools and concepts I didn’t fully
              learn in bootcamp. I’m focused on improving the skills I struggled
              with and preparing myself for real-world development work.
            </p>
            <div className="Skills-learned">
              <h6>Technical Skills Learned:</h6>
              <ul>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Testing Fundamentals</li>
                <li>Performance Optimization </li>
              </ul>
            </div>
            <div className="Learning">
              <h6>Learning Resources:</h6>
              <ul>
                <li>YouTube tutorials</li>
                <li>freeCodeCamp</li>
                <li>MDN Web Docs</li>
                <li>React documentation</li>
                <li>ChatGPT</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

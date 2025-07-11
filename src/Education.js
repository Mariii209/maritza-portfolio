import React from "react";

export default function Education() {
  return (
    <div className="Education">
      <h2>Education & Learning Journey</h2>
      <p>
        My path into front-end development, including formal training,
        self-directed learning, and transferable skills from my previous
        experience.
      </p>
      <section>
        <div className="Cap">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <div className="Journey-container">
          <h5>Front-End Development Bootcamp</h5>
          <p className="Title">SheCodes Front-End Program</p>
          <p className="Description">
            Intensive 8-month program covering modern front-end development
            technologies and best practices. Completed multiple real-world
            projects and worked in collaborative environments.
          </p>
          <div className="stats">
            <div className="stat">
              <p className="stat-value">9</p>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat">
              <p className="stat-value">480+</p>
              <p className="stat-label">Hours of Training</p>
            </div>
          </div>
          <h6>Technical Skills Learned:</h6>
          <ul className="Skills-learned">
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
      </section>

      <section>
        <div className="Growing">
          <i class="fas fa-chevron-left Learning"></i>
          <i class="fas fa-chevron-right Learning"></i>
        </div>
        <div className="Journey-container">
          <h5>Self-Directed Learning</h5>
          <p className="Title">Online Platforms & Resources</p>
          <p className="Description">
            I’ve been expanding my front-end development skills outside of
            SheCodes by working on personal projects and using online tutorials
            to go deeper into tools and concepts I didn’t fully learn in
            bootcamp. I’m focused on improving the skills I struggled with and
            preparing myself for real-world development work.
          </p>
          <h6>Technical Skills Learned:</h6>
          <ul className="Skills-learned">
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
            <li>Testing Fundamentals</li>
            <li>Performance Optimization </li>
          </ul>

          <h6>Learning Resources:</h6>
          <ul>
            <li>YouTube tutorials</li>
            <li>freeCodeCamp</li>
            <li>MDN Web Docs</li>
            <li>React documentation</li>
            <li>ChatGPT</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

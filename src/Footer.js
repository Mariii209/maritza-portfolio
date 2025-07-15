import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div className="Footer-Wrapper">
          <section className="Maritza">
            <h2>Maritza Gutierrez</h2>
            <p>
              Junior front-end developer passionate about creating beautiful,
              functional web experiences.
            </p>
            <div className="Links" aria-label="Social links">
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
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </section>

          <nav className="Quick-links" aria-labelledby="footer-quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about-me">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <section>
            <h3>Skills</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
            </ul>
          </section>

          <address>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:maritza.gutierrez30@yahoo.com">
                  maritza.gutierrez30@yahoo.com
                </a>
              </li>
              <li>Modesto, CA</li>
            </ul>
          </address>
        </div>

        <hr />

        <div className="Copy-right">
          <p>© 2025 Maritza Gutierrez. All rights reserved.</p>
          <p>
            Made with <i class="fa-regular fa-heart"></i> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}

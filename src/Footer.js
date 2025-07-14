import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="Footer-Wrapper">
          <div className="Maritza">
            <h5>Maritza Gutierrez</h5>
            <p>
              Junior front-end developer passionate about creating beautiful,
              functional web experiences.
            </p>
            <div className="Links">
              <a href="/">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="Quick-links">
            <h6>Quick Links</h6>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Experience</a>
              </li>
              <li>
                <a href="/">Resume</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h6>Skills</h6>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div>
            <h6>Contact</h6>
            <ul>
              <li>maritza.gutierrez30@yahoo.com</li>
              <li>Modesto, CA</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="Copy-right">
          <p>© 2025 Maritza Gutierrez. All rights reserved.</p>
          <p>
            Made with <i class="fa-regular fa-heart"></i> and lots of coffee
          </p>
        </div>
      </div>
    </div>
  );
}

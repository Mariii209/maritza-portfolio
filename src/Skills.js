import React from "react";
import "./Skills.css";
import Tools from "./Tools";

export default function Skills() {
  return (
    <section className="Skills" id="skills">
      <h2>Skills & Technologies</h2>

      <div className="Skill-tool-container">
        <div className="First-section">
          <h3>Skills</h3>
          <ul className="Skill-category">
            <li className="Skill">
              <span>HTML5</span>
            </li>

            <li className="Skill">
              <span>JavaScript (ES6)</span>
            </li>

            <li className="Skill">
              <span>React</span>
            </li>

            <li className="Skill">
              <span>Bootstrap</span>
            </li>

            <li className="Skill">
              <span>Figma</span>
            </li>

            <li className="Skill">
              <span>Responsive Design</span>
            </li>

            <li className="Skill">
              <span>CSS3</span>
            </li>

            <li className="Skill">
              <span>APIs (RESTful APIs)</span>
            </li>

            <li className="Skill">
              <span>SEO Basics</span>
            </li>
          </ul>
        </div>

        <Tools />
      </div>
    </section>
  );
}

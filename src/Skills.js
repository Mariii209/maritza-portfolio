import React from "react";
import "./Skills.css";
import Tools from "./Tools";

export default function Skills() {
  return (
    <div className="Skills">
      <h2>Skills & Technologies</h2>

      <div className="Skill-tool-container">
        <div className="First-section">
          <div className="Skill-category">
            <h5>Core Skills</h5>

            <div className="Skill">
              <div className="Skill-info">
                <p className="Skill-name">HTML/CSS</p>
                <p className="Skill-percentage">85%</p>
              </div>
              <div className="Skill-bar">
                <div className="Skill-bar-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="Skill">
              <div className="Skill-info">
                <p className="Skill-name">JavaScript</p>
                <p className="Skill-percentage">87%</p>
              </div>
              <div className="Skill-bar">
                <div className="Skill-bar-fill" style={{ width: "75%" }}></div>
              </div>
            </div>

            <div className="Skill">
              <div className="Skill-info">
                <p className="Skill-name">React</p>
                <p className="Skill-percentage">70%</p>
              </div>
              <div className="Skill-bar">
                <div className="Skill-bar-fill" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="Skill">
              <div className="Skill-info">
                <p className="Skill-name">Bootstrap</p>
                <p className="Skill-percentage">80%</p>
              </div>
              <div className="Skill-bar">
                <div className="Skill-bar-fill" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="Skill">
              <div className="Skill-info">
                <p className="Skill-name">Tailwind CSS</p>
                <p className="Skill-percentage">60%</p>
              </div>
              <div className="Skill-bar">
                <div className="Skill-bar-fill" style={{ width: "60%" }}></div>
              </div>
            </div>

            <div className="Skill">
              <div className="Skill-info">
                <p className="Skill-name">Responsive Design</p>
                <p className="Skill-percentage">80%</p>
              </div>
              <div className="Skill-bar">
                <div className="Skill-bar-fill" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="Skill">
              <div className="Skill-info">
                <p className="Skill-name">Git/GitHub</p>
                <p className="Skill-percentage">70%</p>
              </div>
              <div className="Skill-bar">
                <div className="Skill-bar-fill" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
          <div className="Skill-category">
            <h5>Currently Learning</h5>

            <div className="Skill">
              <div className="Skill-info">
                <p className="Skill-name">TypeScript</p>
                <p className="Skill-percentage">35%</p>
              </div>
              <div className="Skill-bar">
                <div className="Skill-bar-fill" style={{ width: "35%" }}></div>
              </div>
            </div>

            <div className="Skill">
              <div className="Skill-info">
                <p className="Skill-name">Next.js</p>
                <p className="Skill-percentage">30%</p>
              </div>
              <div className="Skill-bar">
                <div className="Skill-bar-fill" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <Tools />
      </div>
    </div>
  );
}

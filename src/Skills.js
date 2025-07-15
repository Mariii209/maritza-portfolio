import React from "react";
import "./Skills.css";
import Tools from "./Tools";

export default function Skills() {
  return (
    <section className="Skills" id="skills">
      <h2>Skills & Technologies</h2>

      <div className="Skill-tool-container">
        <div className="First-section">
          <article className="Skill-category">
            <h3>Core Skills</h3>
            <ul>
              <li className="Skill">
                <div className="Skill-info">
                  <span className="Skill-name">HTML/CSS</span>
                  <span className="Skill-percentage">85%</span>
                </div>
                <div className="Skill-bar">
                  <div
                    className="Skill-bar-fill"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>

              <li className="Skill">
                <div className="Skill-info">
                  <span className="Skill-name">JavaScript</span>
                  <span className="Skill-percentage">87%</span>
                </div>
                <div className="Skill-bar">
                  <div
                    className="Skill-bar-fill"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>

              <li className="Skill">
                <div className="Skill-info">
                  <span className="Skill-name">React</span>
                  <span className="Skill-percentage">70%</span>
                </div>
                <div className="Skill-bar">
                  <div
                    className="Skill-bar-fill"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>

              <li className="Skill">
                <div className="Skill-info">
                  <span className="Skill-name">Bootstrap</span>
                  <span className="Skill-percentage">80%</span>
                </div>
                <div className="Skill-bar">
                  <div
                    className="Skill-bar-fill"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>

              <li className="Skill">
                <div className="Skill-info">
                  <span className="Skill-name">Tailwind CSS</span>
                  <span className="Skill-percentage">60%</span>
                </div>
                <div className="Skill-bar">
                  <div
                    className="Skill-bar-fill"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </li>

              <li className="Skill">
                <div className="Skill-info">
                  <span className="Skill-name">Responsive Design</span>
                  <span className="Skill-percentage">80%</span>
                </div>
                <div className="Skill-bar">
                  <div
                    className="Skill-bar-fill"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>

              <li className="Skill">
                <div className="Skill-info">
                  <span className="Skill-name">Git/GitHub</span>
                  <span className="Skill-percentage">70%</span>
                </div>
                <div className="Skill-bar">
                  <div
                    className="Skill-bar-fill"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </article>

          <article className="Skill-category">
            <h3>Currently Learning</h3>
            <ul>
              <li className="Skill">
                <div className="Skill-info">
                  <span className="Skill-name">TypeScript</span>
                  <span className="Skill-percentage">35%</span>
                </div>
                <div className="Skill-bar">
                  <div
                    className="Skill-bar-fill"
                    style={{ width: "35%" }}
                  ></div>
                </div>
              </li>

              <li className="Skill">
                <div className="Skill-info">
                  <span className="Skill-name">Next.js</span>
                  <span className="Skill-percentage">30%</span>
                </div>
                <div className="Skill-bar">
                  <div
                    className="Skill-bar-fill"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </article>
        </div>

        <Tools />
      </div>
    </section>
  );
}

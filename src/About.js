import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About" id="about-me">
      <h2>About Me</h2>
      <div className="About-container">
        <div className="Description-container">
          <p>
            After exploring different career paths, I discovered my passion for
            web development and made the exciting decision to transition into
            tech. I recently completed an intensive front-end development
            bootcamp where I learned modern web technologies and best practices.
          </p>

          <p>
            My diverse background brings a unique perspective to problem-solving
            and user experience design. I'm excited to apply my newfound
            technical skills alongside my strong work ethic and eagerness to
            learn in a professional development role.
          </p>

          <p>
            When I'm not coding, you can find me working on personal projects,
            contributing to coding communities, or exploring the latest web
            development trends and technologies.
          </p>
        </div>
        <div className="Maritza-image-container ">
          <div className="Image-container">
            <img
              src="/maritza.jpeg"
              alt="Maritza Gutierrez"
              className="Profile-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

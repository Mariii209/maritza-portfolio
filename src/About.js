import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="About" id="about-me">
      <h2>About Me</h2>
      <div className="About-container">
        <article className="Description-container">
          <p>
            After exploring different career paths, I discovered my passion for
            web development and made the exciting decision to transition into
            tech. I recently completed an intensive front-end development
            bootcamp, where I learned modern web technologies and best
            practices.
          </p>

          <p>
            My background brings a unique perspective to problem-solving and
            user experience design. I’m eager to apply my technical skills,
            strong work ethic, and passion for learning in a professional
            development role.
          </p>

          <p>
            When I’m not coding, I enjoy working on personal projects,
            contributing to coding communities, and staying updated on the
            latest web development trends.
          </p>
        </article>
        <figure className="Maritza-image-container ">
          <img
            src="/maritza.jpeg"
            alt="front‑end developer Maritza Gutierrez"
            className="Profile-img"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

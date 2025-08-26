import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="About" id="about-me">
      <h2>About Me</h2>
      <div className="About-container">
        <article className="Description-container">
          <p>
            After exploring different career paths, I found my passion in web
            development and made the transition into tech. I completed an
            intensive front-end development bootcamp and have since continued
            building real-world projects, strengthening my skills in modern web
            technologies and best practices.
          </p>

          <p>
            My background gives me a unique perspective on problem-solving and
            user experience design. I’m eager to apply my technical skills,
            creativity, and strong work ethic to meaningful projects while
            continuing to grow as a developer in a collaborative environment.
          </p>

          <p>
            Outside of professional work, I enjoy developing personal projects,
            contributing to coding communities, and staying current with the
            latest trends in front-end development. In my free time, I’m also
            learning backend development with Node.js, Express, and exploring
            Next.js to expand my skill set toward full-stack development.
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

import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="NavBar">
      <h3>Maritza Gutierrez</h3>

      <div className="Nav-Icon" onClick={handleMenuClick}>
        <i class="fa-solid fa-bars"></i>
      </div>
      <ul className={showMenu ? "menu show" : "menu"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
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
    </div>
  );
}

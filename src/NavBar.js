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
          <a href="#home" onClick={() => setShowMenu(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about-me" onClick={() => setShowMenu(false)}>
            About Me
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setShowMenu(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setShowMenu(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setShowMenu(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => setShowMenu(false)}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setShowMenu(false)}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

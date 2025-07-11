import React from "react";
import "./WhatDrivesMe.css";

export default function WhatDrivesMe() {
  return (
    <div className="WhatDrivesMe">
      <div className="Drive-item">
        <div className="DriveItem-navigation">
          <i className="fas fa-chevron-left Learning"></i>
          <i className="fas fa-chevron-right Learning"></i>
        </div>
        <h6>Learning & Growth</h6>
        <p>
          Constantly expanding my knowledge through hands-on projects and online
          resources.
        </p>
      </div>
      <div className="Drive-item">
        <div className="DriveItem-navigation">
          <i className="fa-solid fa-palette Creativity"></i>
        </div>
        <h6>Fresh Perspective</h6>
        <p>
          Bringing creativity and user-focused thinking to every project I work
          on.
        </p>
      </div>
      <div className="Drive-item Bottom">
        <div className="DriveItem-navigation">
          <i className="fa-solid fa-bolt Eager"></i>
        </div>
        <h6>Enthusiasm</h6>
        <p>
          Eager to contribute to meaningful projects and grow as a developer.
        </p>
      </div>
    </div>
  );
}

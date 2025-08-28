import React, { useState } from "react";
import "./CaseStudy.css";

export default function CaseStudy({
  title,
  description,
  icon,
  projectOverview,
  challenge,
  solution,
  outcome,
}) {
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  return (
    <div className="CaseStudy">
      <button
        className="Button"
        onClick={() => setShowCaseStudy(!showCaseStudy)}
      >
        {showCaseStudy ? "Case Study" : "Case Study"}
      </button>
      {showCaseStudy && (
        <div
          className="PopupOverlay"
          onClick={() => setShowCaseStudy(!showCaseStudy)}
        >
          <div className="PopUpContainer" onClick={(e) => e.stopPropagation()}>
            <i
              class="fa-solid fa-xmark XMark"
              onClick={() => setShowCaseStudy(!showCaseStudy)}
            ></i>
            <div className="HeaderContainer">
              <div className="BusinessName ">
                {icon}
                <h3>{title}</h3>
              </div>
              <p className="MainDescription">{description}</p>
            </div>
            <div className="ProjectContainer">
              <div className="Overview">
                <i class="fa-solid fa-bullseye"></i>
                <h4>Project Overview</h4>
              </div>
              <p>{projectOverview}</p>
            </div>
            <div className="Challenge">
              <h4 className="mb-2">Challenge</h4>
              <p>{challenge}</p>
            </div>
            <div className="Solution ">
              <h4 className="mb-2">Solution</h4>
              <p>{solution}</p>
            </div>
            <div className="Outcome ">
              <h4 className="mb-2">Outcome</h4>
              <p>{outcome}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

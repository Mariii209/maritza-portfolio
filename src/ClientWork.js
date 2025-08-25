import React from "react";
import "./ClientWork.css";

export default function ClientWork() {
  return (
    <div className="ClientWork">
      <h2>Client Work</h2>
      <p className="WorkDescription">
        Real-world projects delivered for local businesses, demonstrating
        practical application of my development skills in solving business
        needs.
      </p>

      <div className="WorkContainer">
        <div className="ClientCard">
          <div className="Heading">
            <div className="HeadingContianer">
              <i class="fa-solid fa-person-digging"></i>
              <div>
                <h3>JLG Concrete Cutting</h3>
                <p>Construction Services</p>
              </div>
            </div>
            <span>Live</span>
          </div>
          <div className="FullDetail">
            <p className="WorkCardDescription">
              This website was built to be fully responsive, so it works
              smoothly on any device. It showcases the company’s concrete
              cutting services in a clear, professional way and includes a
              simple contact form so customers can easily reach out for quotes.
              I also set up the site with SEO best practices so it can rank
              better on Google over time, while keeping it fast and easy to
              navigate for visitors.
            </p>

            <div className="Features">
              <h4>Key Features</h4>
              <ul>
                <li>Responsive Design</li>
                <li>Sevice Showcase</li>
                <li>Contact Form</li>
                <li>SEO Setup</li>
                <li>Fast & User-Friendly</li>
              </ul>
            </div>

            <div className="Technologies">
              <h4>Technologies Used</h4>
              <ul className="TechnologiesUsed">
                <li>React</li>
                <li>HTML5/CSS3</li>
                <li>JavaScript</li>
                <li>Figma</li>
                <li>Font Awesome</li>
                <li>Google Fronts</li>
                <li>Web3Forms</li>
              </ul>
            </div>

            <div className="ClientInfo">
              <div className="TimeLine">
                <i class="fa-solid fa-calendar-days"></i>
                <p>Timeline: 1 week</p>
              </div>
              <div className="Client">
                <i class="fa-solid fa-people-group"></i>
                <p>Client Project</p>
              </div>
            </div>

            <div className="MoreInfo">
              <div className="Challenge">
                <h5>Challenge</h5>
                <p>
                  Created a professional presence for a local business with
                  focus on showcasing their concrete cutting expertise and
                  building trust with potential clients.
                </p>
              </div>
              <div className="Results">
                <h5>Results</h5>
                <p>
                  Clean, professional website that effectively communicates
                  their services and builds credibility in the construction
                  industry.
                </p>
              </div>
            </div>

            <div className="LinkContainer">
              <div className="Line"></div>

              <div className="Links">
                <a
                  href=" https://jlg-concrete-cutting.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <p>View Live Site</p>
                </a>

                <a href="/">Case Study</a>
              </div>
            </div>
          </div>
        </div>

        <div className="ClientCard">
          <div className="Heading">
            <div className="HeadingContianer">
              <i class="fa-solid fa-person-digging"></i>
              <div>
                <h3>Cool Work HVAC Expert</h3>
                <p>HVAC Services</p>
              </div>
            </div>
            <span>Live</span>
          </div>
          <div className="FullDetail">
            <p className="WorkCardDescription">
              I designed and developed a modern, user-friendly website for an
              HVAC company. The site provides clear service information to help
              customers understand their options. It includes a service request
              form so clients can easily reach out for assistance. Emergency
              contact features were also integrated to ensure quick access
              during urgent situations.
            </p>

            <div className="Features">
              <h4>Key Features</h4>
              <ul>
                <li>Responsive Design</li>
                <li>Sevice Showcase</li>
                <li>Contact Form</li>
                <li>SEO Setup</li>
                <li>Google Map integration</li>
                <li>Fast & User-Friendly</li>
              </ul>
            </div>

            <div className="Technologies">
              <h4>Technologies Used</h4>
              <ul className="TechnologiesUsed">
                <li>React</li>
                <li>HTML5/CSS3</li>
                <li>JavaScript</li>
                <li>Figma</li>
                <li>Font Awesome</li>
                <li>Google Fronts</li>
                <li>Web3Forms</li>
              </ul>
            </div>

            <div className="ClientInfo">
              <div className="TimeLine">
                <i class="fa-solid fa-calendar-days"></i>
                <p>Timeline: 1 week</p>
              </div>
              <div className="Client">
                <i class="fa-solid fa-people-group"></i>
                <p>Client Project</p>
              </div>
            </div>

            <div className="MoreInfo">
              <div className="Challenge">
                <h5>Challenge</h5>
                <p>
                  Designed an intuitive interface that helps customers easily
                  find HVAC services and contact information, especially for
                  emergency situations.
                </p>
              </div>
              <div className="Results">
                <h5>Results</h5>
                <p>
                  User-friendly website that streamlined customer inquiries and
                  improved the company's online presence.
                </p>
              </div>
            </div>

            <div className="LinkContainer">
              <div className="Line"></div>

              <div className="Links">
                <a
                  href="https://coolworkhvac.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <p>View Live Site</p>
                </a>

                <a href="/">Case Study</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

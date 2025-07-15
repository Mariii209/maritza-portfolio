import React from "react";
import "./Contact.css";
import Information from "./Information";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="Contact-section">
        <h2>Get In Touch</h2>
        <p className="Contact-description">
          I'm excited to connect with potential employers, fellow developers,
          and anyone interested in collaborating on projects.
        </p>
        <div className="Contact-container">
          <div className="Contact-form">
            <h4>Send me a message</h4>
            <div className="Form-group">
              <div className="User">
                <label htmlFor="">Name</label>
                <div className="Input-wrapper">
                  <input type="text" placeholder="Your Name" />
                </div>
              </div>
              <div className="User">
                <label htmlFor="">Email</label>
                <div className="Input-wrapper">
                  <input type="text" placeholder="your.email@example.com" />
                </div>
              </div>
            </div>
            <div className="Subject">
              <label htmlFor="">Subject</label>
              <div className="Subject-input">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="What's this about?"
                />
              </div>
            </div>
            <div className="Message">
              <label htmlFor="">Message</label>
              <div>
                <textarea
                  name=""
                  id=""
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
            </div>
            <button>
              <i class="fa-regular fa-paper-plane"></i>
              <p>Send Message</p>
            </button>
          </div>
          <Information />
        </div>
      </div>
    </div>
  );
}

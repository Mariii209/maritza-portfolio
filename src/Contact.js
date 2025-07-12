import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-section">
        <h2>Get In Touch</h2>
        <p className="Contact-description">
          I'm excited to connect with potential employers, fellow developers,
          and anyone interested in collaborating on projects.
        </p>
        <div>
          <div className="Contact-form">
            <h4>Send me a message</h4>
            <div>
              <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="your.email@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="">Subject</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>
            <button>
              <i class="fa-regular fa-paper-plane"></i>
              <p>Send Message</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

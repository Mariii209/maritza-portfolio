import React from "react";
import "./Contact.css";
import Information from "./Information";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "e32146bc-af1d-40dd-9267-c98c6f84b02b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };
  return (
    <div className="Contact" id="contact">
      <div className="Contact-section">
        <h2>Get In Touch</h2>
        <p className="Contact-description">
          I'm excited to connect with potential employers, fellow developers,
          and anyone interested in collaborating on projects.
        </p>
        <div className="Contact-container">
          <form className="Contact-form" onSubmit={onSubmit}>
            <h4>Send me a message</h4>
            <div className="Form-group">
              <div className="User">
                <label htmlFor="name">Name</label>
                <div className="Input-wrapper">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>
              <div className="User">
                <label htmlFor="email">Email</label>
                <div className="Input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="Subject">
              <label htmlFor="subject">Subject</label>
              <div className="Subject-input">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                />
              </div>
            </div>
            <div className="Message">
              <label htmlFor="message">Message</label>
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit">
              <i className="fa-regular fa-paper-plane"></i>
              <p>Send Message</p>
            </button>
          </form>
          <Information />
        </div>
      </div>
    </div>
  );
}

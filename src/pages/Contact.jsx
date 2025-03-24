import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import "../css/Contact.css";

function Contact() {
  return (
    <div>
      <Breadcrumb title={Contact.name} />
      <div className="row">
        <div className="col">
          <p>It is very easy to reach us!</p>
          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <input
                placeholder="Name"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="form-group">
              <input
                placeholder="E-mail"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="message"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

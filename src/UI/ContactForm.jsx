import React from "react";
import Button from "./Button";

import "../scss/components/ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact__form">
      <form>
        <div className="contact__form-name">
          <input type="text" placeholder="Name here" />
          <span>Name</span>
        </div>
        <div className="contact__form-lastname">
          <input type="text" placeholder="Last name here" />
          <span>Last name</span>
        </div>
        <div className="contact__form-email">
          <input type="email" placeholder="Example@gmail.com" />
          <span>Email</span>
        </div>
        <div className="contact__form-msg">
          <textarea cols="30" rows="5" placeholder="Start typing"></textarea>
          <span>Message</span>
        </div>
        <Button className="contact__form-btn" type="submit">
          Send message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

import React from "react";
import Button from "./Button";
import contactPhone from "../assets/img/contact-1.png";
import contactEmail from "../assets/img/contact-2.png";
import contactAddress from "../assets/img/contact-3.png";

import "../scss/components/ContactAddress.scss";

const ContactAddress = () => {
  return (
    <address className="contact__address">
      <div className="contact__mobile">
        <h5 className="contact__mobile-title">
          <img src={contactPhone} alt="Phone" />
          Mobile number
        </h5>
        <div className="contact__mobile-number">
          <div className="contact__mobile-number-wrap">
            <a href="tel:+12529373762">+1 252-937-3762</a>
            <Button className="contact__mobile-btn">Call</Button>
          </div>
          <div className="contact__mobile-number-wrap">
            <a href="tel:+12529373762">+1 252-937-3762</a>
            <Button className="contact__mobile-btn">Call</Button>
          </div>
        </div>
      </div>
      <div className="contact__email">
        <h5 className="contact__email-title">
          <img src={contactEmail} alt="Email" />
          E-mail
        </h5>
        <a href="mailto:sample@example.com">sample@example.com</a>
      </div>
      <div className="contact__address-location">
        <h5 className="contact__address-title">
          <img src={contactAddress} alt="Address" />
          Adress
        </h5>
        <div className="contact__address-text">
          5 Indian Spring Dr. Mundelein, IL 60060
        </div>
      </div>
    </address>
  );
};

export default ContactAddress;

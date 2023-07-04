import React from "react";

import roadMap from "../assets/img/road-map-line.png";
import "../scss/components/Contact.scss";

const Contact = ({ children }) => {





  
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">Contact us</h2>
        <div className="contact-wrap">
          {children}
          <div className="contact-wrap__location">
            <div className="contact-wrap__location-img">
              <img src={roadMap} alt="Location" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

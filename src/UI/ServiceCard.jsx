import React from "react";

import "../scss/components/ServiceCard.scss";

const ServiceCard = ({ title, description, link, img }) => {
  return (
    <div className="service__card">
      <div className="service__card-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="/">{link}</a>
      </div>
      <div className="service__card-icon">
        <img src={img} alt="Icon card" />
      </div>
    </div>
  );
};

export default ServiceCard;

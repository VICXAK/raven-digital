import React from "react";
import "../scss/components/Service.scss";
import Button from "../UI/Button";

const Service = ({ children }) => {
  return (
    <section className="service">
      <h2 className="service__title">What we do</h2>
      <div className="container">
        <div className="service-wrap">
          {children}
          <div className="service__solution">
            <h4>Solutions for your bussiness</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <Button className="service__solution-btn">Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

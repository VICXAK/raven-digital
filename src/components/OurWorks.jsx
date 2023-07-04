import React from "react";
import "../scss/components/OurWorks.scss";
import Button from "../UI/Button";

const OurWorks = ({ children }) => {
  return (
    <section className="our-works">
      <h2 className="our-works__title">Our works</h2>
      <div className="container">
        <div className="our-works__wrap">
          {children}
          <div className="our-works__impress">
            <h4>not impressed?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <Button>See more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;

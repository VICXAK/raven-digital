import React from "react";
import "../scss/components/TestimonialsSlider.scss";

const TestimonialsSlider = ({
  title,
  name,
  position,
  description,
  img,
  index,
  currentIndex,
}) => {
  return (
    <div
      className={
        currentIndex === index
          ? "testimonials__slide active-anim"
          : "testimonials__slide"
      }
    >
      <img src={img} alt="Testimonials" />
      <div className="testimonials__slide-content">
        <h5>{title}</h5>
        <span className="name">{name}</span>
        <span className="position">{position}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TestimonialsSlider;

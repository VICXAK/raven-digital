import React, { useState, useEffect, useCallback } from "react";
import TestimonialsSlider from "../UI/TestimonialsSlider";
import "../scss/components/Testimonials.scss";
import { testimonialsData } from "../data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentIndex !== testimonialsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    if (currentIndex === testimonialsData.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      return nextSlide();
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };
  }, [nextSlide]);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-wrap">
          <div className="testimonials-wrap__slider">
            {testimonialsData.map((item, index) => {
              return (
                <TestimonialsSlider
                  currentIndex={currentIndex}
                  index={index}
                  key={index}
                  {...item}
                />
              );
            })}
          </div>
          <div className="testimonials-wrap__slider-btn">
            <span>01</span>
            {Array.from({ length: 3 }).map((_, index) => {
              return (
                <div
                  key={index}
                  className={currentIndex === index ? "btn active" : "btn"}
                ></div>
              );
            })}
            <span>03</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

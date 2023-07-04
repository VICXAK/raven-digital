import React, { useCallback, useEffect, useState } from "react";

import { intro } from "../data";

const Slider = ({ progress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description } = intro[currentIndex];

  const nextSlider = useCallback(() => {
    const isLastSlide = currentIndex === intro.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    if (currentIndex === 0) {
      progress.current.style.width = "65%";
    }
    if (currentIndex === 1) {
      progress.current.style.width = "100%";
    }
    if (currentIndex === 2) {
      progress.current.style.width = "35%";
    }

    setCurrentIndex(newIndex);
  }, [currentIndex, progress]);

  useEffect(() => {
    const slider = setTimeout(() => {
      return nextSlider();
    }, 3000);

    return () => {
      clearTimeout(slider);
    };
  }, [nextSlider]);

  return (
    <div className="intro__slider">
      <div className="intro__slider-info">
        <h1 className="intro__slider-title">
          <p className="test">{title}</p>
        </h1>
        <p className="intro__slider-text">{description}</p>
      </div>
    </div>
  );
};

export default Slider;

import React, { useRef } from "react";
import "../scss/components/Intro.scss";
import Button from "../UI/Button";
import introImg from "../assets/img/intro-img.png";
import Slider from "../UI/Slider";

const Intro = () => {
  const progress = useRef();

  return (
    <div className="intro">
      <div className="container">
        <Slider progress={progress}></Slider>
        <Button className="intro__btn">Learn more</Button>
        <div className="intro__progress">
          <span className="intro__progress-num">01</span>
          <div className="intro__progress-wrap">
            <div ref={progress} className="intro__progress-wrap-bar"></div>
          </div>
          <span className="intro__progress-num">03</span>
        </div>
      </div>
      <div className="intro__img">
        <img src={introImg} alt="Team" />
      </div>
    </div>
  );
};

export default Intro;

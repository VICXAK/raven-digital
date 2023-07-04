import React from "react";
import "../scss/components/Button.scss";

const Button = ({ children, type, className }) => {
  const classNameStyle = className ? `${className} button` : "button";
  return (
    <button className={classNameStyle} type={type || "button"}>
      {children}
    </button>
  );
};

export default Button;

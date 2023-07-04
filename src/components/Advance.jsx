import React from "react";
import "../scss/components/Advance.scss";

const Advance = ({ children }) => {
  return (
    <section className="advance">
      <div className="container">
        <div className="advance__wrap">{children}</div>
      </div>
    </section>
  );
};

export default Advance;

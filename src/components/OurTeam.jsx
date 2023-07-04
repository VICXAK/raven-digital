import React from "react";

import "../scss/components/OurTeam.scss";

const OurTeam = ({ children }) => {
  return (
    <section className="team">
      <div className="container">
        <h2>Our works</h2>
        <div className="team-wrap">{children}</div>
      </div>
    </section>
  );
};

export default OurTeam;

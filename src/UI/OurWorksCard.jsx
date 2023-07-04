import React from "react";

import "../scss/components/OurWorksCard.scss";

const OurWorksCard = ({ img }) => {
  return (
    <div className="our-works__card">
      <img src={img} alt="Our Works" />
    </div>
  );
};

export default OurWorksCard;

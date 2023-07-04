import React from "react";

import "../scss/components/AdvanceCard.scss";

const AdvanceCard = ({ value, title }) => {
  return (
    <div className="advance__card">
      <h5>{value}</h5>
      <p>{title}</p>
    </div>
  );
};

export default AdvanceCard;

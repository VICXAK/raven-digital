import React from "react";

import "../scss/components/ClientsCard.scss";

const ClientsCard = ({ img }) => {
  return (
    <div className="clients-card">
      <img src={img} alt="Clients" />
    </div>
  );
};

export default ClientsCard;

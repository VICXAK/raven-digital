import React from "react";

import "../scss/components/Clients.scss";

const Clients = ({ children }) => {
  return (
    <section className="clients">
      <div className="container">
        <h2 className="clients__title">Clients</h2>
        <div className="clients__wrap">{children}</div>
      </div>
    </section>
  );
};

export default Clients;

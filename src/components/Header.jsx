import React from "react";
import "../scss/components/Header.scss";

const Header = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;

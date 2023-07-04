import React from "react";
import logo from "../assets/img/logo.svg";
import search from "../assets/img/search.svg";
import "../scss/components/Nav.scss";

const Nav = () => {
  let items = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Testimonials",
    "News ",
    "Contacts",
    "Elements",
  ];

  return (
      <nav className="header__nav">
        <div className="header__nav-logo">
          <a href="/">
            <img src={logo} alt="Raven Digital" />
          </a>
        </div>
        <div className="header__nav-wrap">
          <ul className="header__nav-list">
            {items.map((item, i) => (
              <li className='header__nav-list-item' key={i}>{item}</li>
            ))}
          </ul>
          <div className="header__nav-search">
            <img src={search} alt="Search" />
          </div>
        </div>
      </nav>
  );
};

export default Nav;

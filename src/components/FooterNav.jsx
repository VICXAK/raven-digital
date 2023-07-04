import React from "react";


import "../scss/components/FooterNav.scss";

const FooterNav = () => {
  const footerNavData = [
    "Website development",
    "Branding",
    "UI/UX design",
    "Software",
    "Digital marketing",
  ];

  const navContent = footerNavData.map((title, i) => {
    return (
      <li key={i}>
        <a className="footer-nav__link" href="/">
          {title}
        </a>
      </li>
    );
  });

  return (
    <div className="footer-nav">
      <ul className="footer-nav__list">{navContent}</ul>
    </div>
  );
};

export default FooterNav;

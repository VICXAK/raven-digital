import React from "react";
import footerIcons from "../assets/img/social.png";
import footerLogo from "../assets/img/logo.svg";

import "../scss/components/Footer.scss";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-wrap__logo">
            <a href="/">
              <img src={footerLogo} alt="Logo" />
            </a>
          </div>
          <div className="footer-wrap__content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              id fringilla turpis tempor enim. Vel tristique suspendisse{" "}
            </p>
          </div>
          <FooterNav></FooterNav>
          <div className="footer-wrap__social">
            <img src={footerIcons} alt="Social" />
          </div>

          <div className="footer-wrap__copyright">
            <p>Copyright © 2021. Raven Digital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

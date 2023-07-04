import React from "react";
import socialIcons from "../assets/img/social.png";
import "../scss/components/TeamCard.scss";

const TeamCard = ({ name, position, description, img }) => {
  return (
    <div className="team-card">
      <div className="team-card__img">
        <img src={img} alt="Our Team" />
      </div>
      <div className="team-card__content">
        <span className="team-card__content-name">{name}</span>
        <span className="team-card__content-position">{position}</span>
        <p className="team-card__content-description">{description}</p>
        <div className="team-card__content-social-icons">
          <img src={socialIcons} alt="Social Icons" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

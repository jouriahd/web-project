import { useState } from "react";

const HeroCard = ({title, description,link,linktext}) => {
  return (
   <section className="hero-section">
        <div className="hero-content">
          <h1>{title}</h1>
          <p className="hero-subtitle">{description}</p>
        </div>
      </section>
  );
}

export default HeroCard;
        
import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import HeroCard from "../Components/HeroCard";
import FeatureCard from "../Components/FeatureCard";
const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
           <h1>A little magic<br/>in the ordinary.</h1>
          <p className="hero-subtitle">Coffee, curiosities & a place to belong.</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Explore Our World ✦
            </Link>
            <Link to="/registerpage" className="btn btn-secondary">

              ☾ Join Our Coven
            </Link>
          </div>
        </div>
      </section>


      <section className="cards-section">
 
          <FeatureCard 
          title="Upcoming Gatherings"
          description={
            <div>
              <p>Join us for our upcoming events and gatherings! Experience the magic and community of our space.</p>
              <ul>
                <li>📅 Nov 15: Mystical Gathering</li>
                <li>🎨 Dec 1: Enchanting Workshop</li>
              </ul>
            </div>
          } link="/events"
          linktext="Discover More"
        />

        <FeatureCard 
          title="Discover Our Clubs"
          description="Join our clubs to explore the mystical, the magical, and the mysterious. From book clubs to craft circles, there's a place for every curious soul."
          link="/clubs"
          linktext="Explore Club"
        />

      </section>
    </div>
  );
};

export default Home;
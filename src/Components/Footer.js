import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-about">
          <h2>Arcana</h2>

          <p>
            A place to sip, explore, create and connect.
            Discover new interests, meet like-minded people,
            and become part of our community.
          </p>
        </div>

        <div className="footer-navigation">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/clubs">Clubs</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/events">Events</Link>
          <Link to="/menu">Café Menu</Link>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <IconButton
              component="a"
              href="https://www.instagram.com/jversewild?cplk=MWs4cW1yYjFrZ21jdg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/jouri-said-672653338?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 Arcana. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
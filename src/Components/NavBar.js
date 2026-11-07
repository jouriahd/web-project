
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {

  return (
   <nav className="navbar">
    <Link to="/" className="logo">
        <span className="logo-moon">☾</span>
        <span>Marcy Potter</span>
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/clubs" >Clubs</Link>
        <Link to="/shop" >Shop</Link>
        <Link to="/events" >Events</Link>
        <Link to="/menu" >Menu</Link>
        <Link to="/registerpage" >☾ Login</Link>
      </div>
    </nav>
  );
}

export default NavBar;

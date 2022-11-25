import React from "react";
import "../Button/Button.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="logo">
        <p className="logo-text">
          <span>Moon</span>light
        </p>
      </div>
      <menu>
        <ul
          className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservation">Reservation</a>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;
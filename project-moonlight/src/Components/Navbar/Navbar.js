import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between itemse-center navbar">
      <div className="logo"><a href="/">
        <p className="logo-text">
          <span>Moon</span>light
        </p>
        </a>
      </div>
        <ul
          className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="../menu">Menu</a>
          </li>
          <li>
            <a href="../reservation">Reservation</a>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
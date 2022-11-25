import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#contact">&bull; Contact</a>
            <a href="#about">&bull; About</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
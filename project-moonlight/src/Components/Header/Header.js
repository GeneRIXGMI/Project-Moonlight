import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import "../Button/Button.css";

const Header = () => {
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left">
          <h1>
            <span>MoonLight</span>
            <span>Restaurant</span>
          </h1>
          <p className="u-text-small">
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Obcaecati ea aliquam sit nemo nisi! Nesciunt quis illum id qui
            et!
          </p>
          <div className="header-cta">
            <Button text={"Menu"} btnClass={"btn-dark"} href={"#menu"} />
            <Button text={"Reservation"} btnClass={"btn-light"} href={"#reservation"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
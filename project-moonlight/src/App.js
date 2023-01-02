import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import { LMenu, LReservation, LContact, LAbout, LHome } from "./Components"

const App = () => {
  const [page, setPage] = useState('home');

  const ReturnPage = () =>{
    switch(page){
      case 'home':
        return(<LHome />);
      case 'menu':
        return(<LMenu />);
      case 'contact':
        return(<LContact />);
      case 'reservation':
        return(<LReservation />);
    }
  };

  return (
    <>
      <div className='w-full flex justify-between items-center navbar'>
      <div className="logo"><button className='BTN' id="homeBTN" onClick={() => setPage('home')}>
        <p className="logo-text">
          <span>Moon</span>light
        </p>
        </button>
        </div>
        <ul className="nav-buttons">
          <li><button className='BTN' id="homeBTN" onClick={() => setPage('home')}>Home</button></li>
          <li><button className='BTN' id="menuBTN" onClick={() => setPage('menu')}>Menu</button></li>
          <li><button className='BTN' id="reservationBTN" onClick={() => setPage('reservation')}>Reservation</button></li> 
          <li><button className='BTN' id="contactBTN" onClick={() => setPage('contact')}>Contact</button></li>
        </ul>
      </div>
      <ReturnPage />
    </>
  )
}

export default App;

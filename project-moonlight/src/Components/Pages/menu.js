import React from "react";
import "./styles.css"
import { useState } from "react";
import {LBreakfast, LLunch, LDinner, LDessert, LDrinks} from "../index"

const LMenu = () => {
    const [page, setPage] = useState('home');
  
    const ReturnPage = () =>{
      switch(page){
        case 'breakfast':
          return(<LBreakfast />);
        case 'lunch':
          return(<LLunch />);
        case 'dinner':
          return(<LDinner />);
        case 'drinks':
          return(<LDrinks />);
        case 'dessert':
            return(<LDessert />)
      }
    };
  
    return (
      <div id="menu">
        <div className='w-full flex justify-between items-center menu-navbar'>
          <ul className="menu-nav-buttons">
            <li><button className='BTN' id="breakfastBTN" onClick={() => setPage('breakfast')}>Breakfast</button></li>
            <li><button className='BTN' id="lunchBTN" onClick={() => setPage('lunch')}>Lunch</button></li>
            <li><button className='BTN' id="dinnerBTN" onClick={() => setPage('dinner')}>Dinner</button></li>
            <li><button className='BTN' id="drinksBTN" onClick={() => setPage('drinks')}>Drinks</button></li> 
            <li><button className='BTN' id="dessertBTN" onClick={() => setPage('dessert')}>Dessert</button></li>
          </ul>
        </div>
        <div id="menu-contents"><ReturnPage /></div>
        </div>
    )
  }

export default LMenu;
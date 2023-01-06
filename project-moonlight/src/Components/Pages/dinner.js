import React from "react";
import grillSal from "../../assets/Grilled-Salmon.png"
import japHam from "../../assets/Japanese-Hamurger-with-rice.png"
import steak from "../../assets/Steak.png"

function LDinner(){
    return(
        <div className="dinner-menu">
            <div className="item">
                <img src={steak} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Steak</h1>
                    <div id="item-price">10$</div>
                </div>
            </div>
            <div className="item">
                <img src={japHam} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Japanese Hamurger with rice</h1>
                    <div id="item-price">12$</div>
                </div>
            </div>
            <div className="item">
                <img src={grillSal} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Grilled Salmon</h1>
                    <div id="item-price">11$</div>
                </div>
            </div>
        </div>
    )
}

export default LDinner;
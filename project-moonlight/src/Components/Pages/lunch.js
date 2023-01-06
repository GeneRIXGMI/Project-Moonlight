import React from "react";
import hamSan from "../../assets/Ham-and-Cheese-Sandwich.png"
import garBread from "../../assets/Garlic-Bread.png"
import oya from "../../assets/Oyakodon.png"

function LLunch(){
    return(
        <div className="lunch-menu">
        <div className="item">
                <img src={hamSan} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Ham Sandwich</h1>
                    <div id="item-price">5$</div>
                </div>
            </div>
            <div className="item">
                <img src={garBread} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Garlic Bread</h1>
                    <div id="item-price">2$</div>
                </div>
            </div>
            <div className="item">
                <img src={oya} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Oyakodon</h1>
                    <div id="item-price">6$</div>
                </div>
            </div>
        </div>
    )
}

export default LLunch;
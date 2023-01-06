import React from "react";
import choCake from "../../assets/Chocolate-Cake.png"
import parfait from "../../assets/Strawberry-Parfait.png"

function LDessert(){
    return(
        <div className="dessert-menu">
        <div className="item">
                <img src={choCake} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Chocolate Cake</h1>
                    <div id="item-price">5$</div>
                </div>
            </div>
            <div className="item">
                <img src={parfait} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Parfait</h1>
                    <div id="item-price">7$</div>
                </div>
            </div>
        </div>
    )
}

export default LDessert;
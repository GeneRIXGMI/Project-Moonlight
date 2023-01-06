import React from "react";
import beer from "../../assets/Beer.png"
import coke from "../../assets/Coke.png"
import lemo from "../../assets/Lemonade.png"
import wine from "../../assets/Wine.png"

function LDrinks(){
    return(
        <div className="drinks-menu">
                <div className="item">
                <img src={coke} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Coca-Cola</h1>
                    <div id="item-price">1$</div>
                </div>
            </div>
            <div className="item">
                <img src={lemo} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Lemonade</h1>
                    <div id="item-price">2$</div>
                </div>
            </div>
            <div className="item">
                <img src={beer} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Beer</h1>
                    <div id="item-price">3$</div>
                </div></div>
                <div className="item">
                <img src={wine} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Wine</h1>
                    <div id="item-price">4$</div>
                    </div>
                </div>
        </div>
    )
}

export default LDrinks;
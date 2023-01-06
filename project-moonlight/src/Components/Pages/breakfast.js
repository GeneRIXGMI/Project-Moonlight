import React from "react";
import "./styles.css"
import eggBacon from "../../assets/Eggs-and-Bacon.png"
import frToast from "../../assets/French-Toast.png"
import waffBacon from "../../assets/Waffles-with-bacon.png"

function LBreakfast(){
    return(
        <div className="breakfast-menu">
            <div className="item">
                <img src={eggBacon} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Eggs And Bacon</h1>
                    <div id="item-price">3$</div>
                </div>
            </div>
            <div className="item">
                <img src={frToast} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">French Toast</h1>
                    <div id="item-price">1$</div>
                </div>
            </div>
            <div className="item">
                <img src={waffBacon} width={200} height={200}></img>
                <div className="item-details">
                    <h1 id="item-name">Waffles With Bacon</h1>
                    <div id="item-price">5$</div>
                </div>
            </div>
        </div>
    )
}

export default LBreakfast;
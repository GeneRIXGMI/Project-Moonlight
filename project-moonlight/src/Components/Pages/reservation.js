import React from "react";
import "./styles.css"

function LReservation(){
    return(
        <div id="reservation">
            <div id="form">
                <div id="name"><label>Your Name: </label><input type="text" name="yourname" placeholder="Jhon Doe" /></div>
                <div id="people"><label>Number of people: </label>
                <input type="number" id="numberPeople" name="numPeople" placeholder="4" min={1} max={15} required /></div>
                <div id="resdate"><label>Date: </label><input type="date" id="resdate" name="whendate" required /></div>
                <div id="restime"><label>Time: </label><input type="time" id="time" name="timeh" min={"9:00"} max={"00:00"} required /></div>
                <div id="youremail"><label>Your Email: </label><input type="email" id="email" name="resemail" placeholder="jhon.doe@email.com" required /></div>
                <div id="yourphone"><label>Your Phone: </label><input type="tel" id="phone" name="resphone" placeholder="431-537-8459" required /></div>
                <button id="bookbtn" type="submit">Book Table</button>
            </div>
        </div>
    )
}

export default LReservation;
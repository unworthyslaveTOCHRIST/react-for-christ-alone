// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React from "react"
import myLord from "../GTLJC_images/THE_LORD_COMES_BACK copy.png"
import "../../style.css"


export default function NavBar(){
    const GTLJC_firstName = "YAHWEH";
    const GTLJC_secondName = "my Purity";
    const GTLJC_newDate = new Date();
    return(
        <div className = "GTLJC_navbar">
            <img src = {myLord} alt = "my Lord returns for us" width = "10%" />
            <h3>Maranatha Come {GTLJC_firstName}, {GTLJC_secondName} today is: {GTLJC_newDate.toDateString()}</h3>
        </div>
    )
}
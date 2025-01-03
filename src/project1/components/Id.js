// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"
import "../../style.css"
import myLord from "../GTLJC_images/the_cross.jpg"

export default function Id(){
    return(
        <div className = "GTLJC_id">
            <figure>
                <img src = {myLord} alt = "i_and_the_Lord_on_The_Cross" width = "40%"/>
                <figcaption>
                    <h3>Pray Always</h3>
                    <h4>Pray Always</h4>
                    <h4>Pray Always</h4>
                </figcaption>
             </figure>
            <div className = "GTLJC_id_bot">
                <a>
                    <button type = "button">Pray Always</button>
                </a>
                <a>
                    <button type = "button">Pray Always</button>
                </a>
            </div>
             
        </div>
    )
}

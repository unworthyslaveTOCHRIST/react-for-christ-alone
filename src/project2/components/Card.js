// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React from "react"
import "../../style.css"
import GTLJC_church from "../church.svg"

export default function Card(GTLJC_any){
    const props = GTLJC_any
    GTLJC_any = GTLJC_any.GTLJC_x;

    let GTLJC_badgeText;
    if (GTLJC_any.GTLJC_openScripture === 1267)
    {
        GTLJC_badgeText = "GIVEN SCRIPTURE";
    }
    else if (GTLJC_any.GTLJC_openScripture === "IN THE SPIRIT")
    {
        GTLJC_badgeText = "IN THE SPIRIT";
    }
    let GTLJC_image = GTLJC_any.GTLJC_img

    let {GTLJC_name, _name4, _name2,_name3} = props;
    console.log(GTLJC_image)

    return(
        <div className = "GTLJC_card">
            <figure>
                <div class ="GTLJC_img">
                    
                    <span class = "GTLJC_super_im">Pray Always</span>
                    </div>
                <div>

                  {GTLJC_badgeText && <p><img src = {GTLJC_any.GTLJC_img} width = "100px"/><p>{GTLJC_badgeText}</p> </p>}
                </div>
                <figcaption>
                    <p>
                        <img className = "GTLJC_icon" src = {GTLJC_church} alt = "GTLJC_church"
                         width = "7%"/>
                        {GTLJC_any.GTLJC_name}
                    </p>
                    <p>{GTLJC_any.GTLJC_phone_no}</p>
                    <p>{GTLJC_any.GTLJC_address}</p>
                </figcaption>
            </figure>
            
        </div>
    )
}
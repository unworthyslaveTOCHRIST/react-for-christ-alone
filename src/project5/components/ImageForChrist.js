// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React from "react"

export default function ImageForChrist(props){
    const GTLJC_changeImg = props.GTLJC_chargeIsTrue ? props.GTLJC_url1 : props.GTLJC_url2
    
    return(
        <div className = "GTLJC_image-for-Christ">
            {/* <p>{String(GTLJC_changeImg)}</p> */}
            <img onClick = {props.handleClick} src = {GTLJC_changeImg} alt = ""width = "30%"/>   
        </div>
    )
}
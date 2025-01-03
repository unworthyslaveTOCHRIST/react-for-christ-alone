//ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React from "react"

export default function Count(props){
    console.log("Count component GRACIOULSY rendered")

    return(
        <div className="GTLJC_count">
            <h1>{props.GTLJC_number}</h1>
            <button type="button" onClick={props.handleClick}>
                Bless The Lord Oh my soul
            </button>
        </div>
    )
}
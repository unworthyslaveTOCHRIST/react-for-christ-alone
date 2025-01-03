// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import "../style.css"
import React from "react"

export default function Box(props){

    const [GTLJC_boxOn, GTLJC_setBoxOn] = React.useState(props.GTLJC_on)
    const GTLJC_styles = {
        backgroundColor : (props.GTLJC_on ?  "blue" : "yellow")
    }
    
    // function GTLJC_handleClick(){
    //     GTLJC_setBoxOn(GTLJC_prevValue => !GTLJC_prevValue)
    // }
    return(
        
            <h1  onClick = {props.GTLJC_handleClick} style = {GTLJC_styles} className = "GTLJC_box">A Christly Box {props.GTLJC_item.GTLJC_id}</h1>
        
    )
}
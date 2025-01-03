// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React, {useState} from "react"
import Count from "./components/Count"

export default function App2(){
    const [GTLJC_state, GTLJC_setState]= React.useState(["The Lord is full of Grace", "The Lord is full of Truth"])
    const [GTLJC_count, GTLJC_setCount] = React.useState(3)

    console.log("App component GRACIOULSY rendered")
    let GTLJC_loveTheLord = true
    // const GTLJC_arr = 
    const GTLJC_arr_mapped = GTLJC_state.map((GTLJC_item)=>
        {
            return(
                <p key = {GTLJC_item}>{GTLJC_item}</p>
            )
        }
    )

    function GTLJC_handleClick(){
        GTLJC_setState(GTLJC_prevState =>
            {
                return(
                    ([...GTLJC_prevState, `The Lord is merciful ${GTLJC_prevState.length + 1}`])
                )
            }    
        )

        GTLJC_setCount(GTLJC_prevValue => GTLJC_prevValue + 1)
        
    }

    function GTLJC_handleClick2(){
        GTLJC_setState(GTLJC_state - 1)
        GTLJC_count -= 1
    }
    return(
        <div className = "GTLJC_app2">
            {GTLJC_loveTheLord ? "Yes" : "No"}
            <p>Thank you Lord {GTLJC_arr_mapped}</p>
            <button type = "button" onClick = {GTLJC_handleClick}>
                Click to praise The Lord yet even more
            </button>
            <Count 
                GTLJC_number = {GTLJC_count}
            />
            <button type = "button" onClick = {GTLJC_handleClick2}>
                Click to praise The LORD
                <h1>{GTLJC_state ? "Thank you Lord" : "Thank you Lord very much"}</h1>
            </button>
        </div>
    )
}
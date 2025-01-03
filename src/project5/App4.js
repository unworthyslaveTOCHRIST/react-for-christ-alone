// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"
import ChristlyWindowTracker from "./components/ChristlyWindowTracker"

export default function App4(){

    const [GTLJC_show, GTLJC_setShow] = React.useState(true)

    function GTLJC_handleClick(GTLJC_event){
        GTLJC_setShow((GTLJC_prevShow)=>!GTLJC_prevShow)
    }
    return(
        <div className = "GTLJC_app4">
            <button onClick = {GTLJC_handleClick} type = "submit">
                Graciously toggle The Christly window tracker           
            </button>
            {GTLJC_show && 
                <ChristlyWindowTracker 
                    GTLJC_show = {GTLJC_show}
                />
            }

        </div>
    )
}
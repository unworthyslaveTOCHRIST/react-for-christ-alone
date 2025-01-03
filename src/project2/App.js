// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React from "react"
import Card from "./components/Card"
import Main from "./components/Main"
import NavBar from "./components/NavBar"
import "../style.css"
import dataForChrist from "./dataForChrist"

export default function App(){
    const GTLJC_comps = dataForChrist.map(GTLJC_x =>
        {
            return (
                <Card 
                    key        = {GTLJC_x.GTLJC_id}
                    GTLJC_x    = {GTLJC_x}
                />
            )
        }
    )
    return(
        <div>
            <NavBar />
            <Main />
            <div className = "GTLJC_hor_tile">
                {GTLJC_comps}
            </div>
            
        </div>
        
    )
}

console.log(["unworthy","slave","TO CHRIST"].map( 
    (GTLJC_x) => `<p>${GTLJC_x}</p>`
));
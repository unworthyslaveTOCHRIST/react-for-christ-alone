// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"
import Header from "./components/Header"
import GeneratorInput from "./components/GeneratorInput"
import dataForChrist from "./dataForChrist"
import Count from "./components/Count"

export default function App(){
    const dataForChrist_mapped = dataForChrist.map((GTLJC_item)=>
        {
            return(
                <GeneratorInput 
                    key = {GTLJC_item.GTLJC_id}
                    GTLJC_item = {GTLJC_item}
                />
            )
        }
    )
    return(
        <div className = "GTLJC_app">
            <Header />
            <GeneratorInput 
            
            
            />
            <h1>The Lord's Gracious app</h1>
        </div>
    )
}
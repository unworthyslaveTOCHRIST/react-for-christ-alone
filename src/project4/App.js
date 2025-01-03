// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"
import JournalEntry from "./components/JournalEntry"
import dataForChrist from "./dataForChrist"
import Header from "./components/Header"
import "./style.css"



export default function App(){

    const journalEntry_mapped = dataForChrist.map((GTLJC_item) =>
        {
            return(
                <JournalEntry 
                    key = {GTLJC_item.GTLJC_id}
                    GTLJC_item = {GTLJC_item}
                />
            )
        }
    )
    return(
        <div className = "GTLJC_app">
            <Header />
            <div className ="GTLJC_Holy_container">
                {journalEntry_mapped}
            </div>
            
        </div>
    )
}
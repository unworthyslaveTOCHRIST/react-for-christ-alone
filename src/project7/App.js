//ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import  React from "react"
import Form from "./components/Form"
import "./style.css"

export default function App(){

    fetch("https://swapi.dev/api/people/1")
        .then(GTLJC_res => GTLJC_res.json())
        .then(GTLJC_data => console.log(GTLJC_data))
    return(
        <div className = "GTLJC_app">
            {/* <h1>The Lord's GRACIOUS app</h1> */}
            <Form 
            
            />
        </div>
    )
}
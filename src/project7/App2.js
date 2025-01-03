// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"


export default function App2(){

    const [GTLJC_count, GTLJC_setCount] = React.useState(0)
    const [GTLJC_corona, GTLJC_setCoronaData] = React.useState({})
    function GTLJC_handleClick(GTLJC_event){
        
        GTLJC_setCount((GTLJC_count)=>GTLJC_count + 1)
    }

    console.log(GTLJC_corona);
    React.useEffect(()=>{
        console.log("The Lord is Faithful and True")
        fetch("https://api.imgflip.com/get_memes").then(result => result.json()).then(data => GTLJC_setCoronaData(data))
    }, [GTLJC_count])
    return(
        <div className = "GTLJC_app2">
            <h1>A Gracious new app for The Lord alone {GTLJC_count}</h1>
            {/* <img src = {GTLJC_corona.links.patch.small} alt = "" width = "100%" /> */}
            <button type = "submit" onClick = {GTLJC_handleClick}>
                Graciously click
            </button>
        </div>
    )
}
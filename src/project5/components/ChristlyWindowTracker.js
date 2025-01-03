// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"

export default function ChristlyWindowTracker(props){
    const [GTLJC_windowWidth, GTLJC_setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect( ()=>{
        function GTLJC_widthVary(){
            GTLJC_setWindowWidth((GTLJC_prevValue)=>window.innerWidth)
            console.log(`GRACIOUS new window width: ${window.innerWidth}`)
        }

        window.addEventListener("resize", GTLJC_widthVary)

       

    }
               
    , [])
    
    return(
        <div className = "GTLJC_christ">
            <h1> Christly window width = {GTLJC_windowWidth} </h1>
        </div>
        )
}
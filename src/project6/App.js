// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"
import "./style.css"
import boxDataForChrist from "./boxDataForChrist"
import Box from "./components/Box"

export default function App(props){


    const [GTLJC_boxes, GTLJC_setBoxes] = React.useState(boxDataForChrist)
    const GTLJC_boxesMapped = GTLJC_boxes.map( function (GTLJC_item) {
        return(
            <Box 
                key = {GTLJC_item.GTLJC_id}
                GTLJC_item = {GTLJC_item}
                GTLJC_on  = {GTLJC_item.GTLJC_on}
                GTLJC_handleClick = {()=>GTLJC_toggle(GTLJC_item.GTLJC_id)}
            />
        )
    }
    )

    function GTLJC_toggle(GTLJC_id){
        GTLJC_setBoxes((GTLJC_prevValue)=>{
            return(
                GTLJC_prevValue.map((GTLJC_box)=>{
                    return(
                        GTLJC_box.GTLJC_id === GTLJC_id ?
                        {...GTLJC_box, GTLJC_on: !GTLJC_box.GTLJC_on} :
                        GTLJC_box
                    )
                })
            )
        })
    }
    return(
        <div className = "GTLJC_app">
            {GTLJC_boxesMapped}
            A Christly application
        </div>
    )
}
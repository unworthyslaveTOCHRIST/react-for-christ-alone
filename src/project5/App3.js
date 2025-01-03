// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React from "react"
import "./style.css"
import ImageForChrist from "./components/ImageForChrist"
import Count from "./components/Count"


export default function App3(){
    const [GTLJC_obj, GTLJC_setObj] =   React.useState( {
        GTLJC_id          :    2,
        GTLJC_title       :   "Genesis",
        GTLJC_location    :   "Egypt-Canaan",
        GTLJC_googleMapLocation: "../project3/index.js",
        GTLJC_startDate   :   "2024-12-25",
        GTLJC_endDate     :   "2025-12-25",
        GTLJC_imgUrl      :    "./GTLJC_images/THE_LORD_PRAYS.jpg",
        GTLJC_subject : "The Lord is my Shepherd, i shall not want",
        GTLJC_verse   : "Psalms 23:1",
        GTLJC_charge  : "Pray Always Everytime",
        GTLJC_chargeIsTrue : false,
        GTLJC_imgUrl2 : "./GTLJC_images/the_lord_and_i.jpg"
    
    }
)       

    function GTLJC_handleClick(){
        GTLJC_setObj((GTLJC_prevValue) =>
        {
            console.log("Graciously clicked")
            return(
                {
                    ...GTLJC_prevValue,
                    GTLJC_chargeIsTrue : !GTLJC_prevValue.GTLJC_chargeIsTrue
                }
            )
        })
    }
    
    return(
        <div className ="GTLJC_app3">
            <ImageForChrist 
                GTLJC_url1 = {GTLJC_obj.GTLJC_imgUrl}
                GTLJC_url2 = {GTLJC_obj.GTLJC_imgUrl2}
                GTLJC_chargeIsTrue = {GTLJC_obj.GTLJC_chargeIsTrue}
                handleClick = {GTLJC_handleClick}
            
            />
            <Count 
                handleClick = {GTLJC_handleClick}
            />
            <p>{GTLJC_obj.GTLJC_charge}</p>
            <p>{GTLJC_obj.GTLJC_charge}</p>
            <p>{GTLJC_obj.GTLJC_charge}</p>
            <p>{GTLJC_obj.GTLJC_charge}</p>
        </div>
    )
}
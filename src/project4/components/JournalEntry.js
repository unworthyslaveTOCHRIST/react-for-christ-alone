// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"
import "../style.css"

export default function JournalEntry(props){
    return(
        <div className = "GTLJC_je">
            <img src = {props.GTLJC_item.GTLJC_imgUrl} width = "250vmin" height = "auto" alt = ""/>
            <div className = "GTLJC_info">
                <p>{props.GTLJC_item.GTLJC_title}</p>
                <h1>{props.GTLJC_item.GTLJC_location}</h1>
                <p><a href = {props.GTLJC_item.GTLJC_googleMapLocation}>Click to praise The Lord</a></p>
                <p>
                    <span>
                        {props.GTLJC_item.GTLJC_startDate}
                    </span>
                    <span>
                        {props.GTLJC_item.GTLJC_endDate}
                    </span>         
                </p>
                <p>
                    {props.GTLJC_item.GTLJC_subject},{props.GTLJC_item.GTLJC_subject},{props.GTLJC_item.GTLJC_subject}
                    {props.GTLJC_item.GTLJC_subject},{props.GTLJC_item.GTLJC_subject},{props.GTLJC_item.GTLJC_subject}
                    
                </p>
            </div>
        </div>
    )
}
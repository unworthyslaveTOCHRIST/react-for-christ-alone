import React from "react"
import "../../style.css"
import GTLJC_facebook from "../facebook-f.svg"
import GTLJC_twitter from "../twitter.svg"
import GTLJC_church from "../church.svg"
import GTLJC_buffer from "../buffer.svg"



export default function Footer(){
    return(
        <>
            <div className = "GTLJC_footer">
                <img src = {GTLJC_facebook} alt = "GRACIOUS_logo" width = "10%"/>
                <img src = {GTLJC_twitter} alt = "GRACIOUS_logo" width = "10%"/>
                <img src = {GTLJC_church} alt = "GRACIOUS_logo" width = "10%"/>
                <img src = {GTLJC_buffer} alt = "GRACIOUS_logo" width = "10%"/>
            </div>
        </>
    )
}
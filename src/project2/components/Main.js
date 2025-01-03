// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"
import GTLJC_img1 from "../GTLJC_images/GTLJC_FATHER_OF_SPIRITS_2.jpg"
import GTLJC_img2 from "../GTLJC_images/GTLJC_FATHER_OF_SPIRITS_4.jpg"
import GTLJC_img3 from "../GTLJC_images/the_lord_and_i.jpg"
import GTLJC_img4 from "../GTLJC_images/THE_LORD_COMES_BACK copy.png"
import GTLJC_img5 from "../GTLJC_images/THE_LORD_PRAYS.jpg"
import GTLJC_img6 from "../GTLJC_images/blood_of_the_lamb.jpg"
import GTLJC_img7 from "../GTLJC_images/blood_of_the_lamb2.jpg"
import GTLJC_img8 from "../GTLJC_images/the_cross.jpg"
import GTLJC_img9 from "../GTLJC_images/the_crown_of_thorns.jpg"

import "../../style.css"

export default function Main(){
    return(
        <div className ="GTLJC_main">
            <div className = "GTLJC_img_stack">
                <img src ={GTLJC_img1} alt = "GTLJC_imgage 1" width = "50px" />
                <img src ={GTLJC_img2} alt = "GTLJC_imgage 2" width = "50px" />
                <img src ={GTLJC_img3} alt = "GTLJC_imgage 3" width = "50px" />
                <img src ={GTLJC_img4} alt = "GTLJC_imgage 4" width = "50px" />
                <img src ={GTLJC_img5} alt = "GTLJC_imgage 5" width = "50px" />
                <img src ={GTLJC_img6} alt = "GTLJC_imgage 6" width = "50px" />
                <img src ={GTLJC_img7} alt = "GTLJC_imgage 7" width = "50px" />
                <img src ={GTLJC_img8} alt = "GTLJC_imgage 8" width = "50px" />
                <img src ={GTLJC_img9} alt = "GTLJC_imgage 9" width = "50px" />
            </div>
            <div>
                <h3>The Lord is my strength</h3>
                <p>
                    Do all things without murmurings and disputings: 
                    That ye may be blameless and harmless, 
                    the sons of God, without rebuke, 
                    in the midst of a crooked and perverse nation, 
                    among whom ye shine as lights in the world;
                    (Philippians 2:14-15 KJV)
                </p>
            </div>
            
        </div>
    )
}
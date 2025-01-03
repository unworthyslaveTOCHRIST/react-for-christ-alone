// ALL THANKS AND GLORY TO THE AND my ONLY GOD  AND LORD JESUS CHRIST ALONE
import React from "react"
import "../style.css"

export default function Scripture(props){
   //const inspired_authors = JSON.parse(props.inspired_authors)
    
   const [GTLJC_isShown, GTLJC_setIsShown] = React.useState(true);
   const [GTLJC_messages, GTLJC_setMessages] = React.useState(["JEHOVAH JIREH", "JEHOVAH JIREH"])
   
   
    function GTLJC_toggle(){
    GTLJC_setIsShown((GTLJC_prevValue)=>!GTLJC_prevValue)
   }
   let GTLJC_cond = "";
   if(GTLJC_messages.length == 0)
   {
        GTLJC_cond = "The Lord Reigneth";
   }
   else{
        if(GTLJC_messages.length == 1)
        {
            GTLJC_cond = "The Lord Reigneth 1";
        }
        else{
            GTLJC_cond = "The Lord Reigneth 2 or more";
        }
   }
   
   return(
        
        <div className = "GTLJC_scripture">
            <h3>{String(GTLJC_isShown)}</h3>
            <h3 style = {{"display": props.verse ? "block":"list-item"}}>Verse: {props.verse}</h3>
            <p><b>Subject:</b> {GTLJC_isShown && props.subject}</p>
            <button type = "button" onClick={GTLJC_toggle}>
                {GTLJC_messages.length > 0 ? <span>{GTLJC_cond} </span> :<span>  {GTLJC_cond} </span> }
            </button>
        </div>
    )
}
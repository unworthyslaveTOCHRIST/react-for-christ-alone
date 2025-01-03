// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import React from "react"
import "../style.css"
import GTLJC_Maranatha from "../GTLJC_images/THE_LORD_COMES_BACK copy.png"
import dataForChrist from "../dataForChrist"

export default function GeneratorInput(props){

    let [GTLJC_Url, GTLJC_setUrl] = React.useState("");
    const [GTLJC_isClicked, GTLJC_setIsClicked]= React.useState(true)
    

    const [GTLJC_genImage, GTLJC_setGenImage] = React.useState({
        GTLJC_topText : "",
        GTLJC_bottomText: "",
        GTLJC_randomImage : "../GTLJC_images/THE_LORD_COMES_BACK copy.png"
    })

    const [GTLJC_genImageAll, GTLJC_setGenImageAll] = React.useState([])
    React.useEffect(()=>{
        console.log("The Lord is Faithful and True")
        fetch("https://api.imgflip.com/get_memes").then(result => result.json()).then(GTLJC_data => GTLJC_setGenImageAll(GTLJC_data.data.memes))
    }, [])
    console.log(GTLJC_genImageAll)
    function GTLJC_imageGenerator(){
        GTLJC_setIsClicked((GTLJC_prevValue)=>!GTLJC_prevValue)
        const dataEntriesForChrist = GTLJC_genImageAll
        const GTLJC_randNo = Math.floor(Math.random() * dataEntriesForChrist.length)
        const GTLJC_imgUrl = GTLJC_genImageAll[GTLJC_randNo].url
        console.log("Gracious url "+ GTLJC_randNo )
        GTLJC_setGenImage(GTLJC_prevValue => {
            
            return(
                {
                    ...GTLJC_genImage,
                    GTLJC_randomImage: GTLJC_imgUrl
                }
            )
            }
        )
    }

    const [GTLJC_formData, GTLJC_setFormData] = React.useState(
        {
            GTLJC_firstInput    :   "",
            GTLJC_lastInput     :   "",
            GTLJC_textarea      :   "",
            GTLJC_isSaved       :   true,
            GTLJC_isOrdained    :   "",
            GTLJC_spiritualGift :   ""
        }
    )
    const [GTLJC_in2, GTLJC_setIn2] = React.useState("")
    
    
    //console.log(GTLJC_formData)
    console.log(` ${GTLJC_formData.GTLJC_isSaved} 
        ${GTLJC_formData.GTLJC_isOrdained}
        ${GTLJC_formData.GTLJC_spiritualGift}`)
    function GTLJC_handleChange(GTLJC_event){
       const {name, value, type, checked} = GTLJC_event.target

        GTLJC_setFormData((GTLJC_prevFormData)=>{
                return(
                    {
                        ...GTLJC_prevFormData ,
                        [name] : type == "checkbox" ? checked :value,
                    }
                )
            }
        )
        
    }

    function GTLJC_handleSubmit(GTLJC_event){
        //GTLJC_event.preventDefault()
        console.log("Graciously clicked the submit button")
    }

   return(
        
        <div className = "GTLJC_genName">
            <p>{GTLJC_Url}</p>
            <form 
            onSubmit={GTLJC_handleSubmit}
            encType = "application/x-www-url-encoded"
            >
                {/* <label for = "GTLJC_in1"></label>  */}
                <input type = "text" 
                    name = "GTLJC_firstInput" id = "GTLJC_in1" 
                    placeholder="The Lord is ?"
                    onChange={GTLJC_handleChange}
                    value={GTLJC_formData.GTLJC_firstInput}/>
                <input type = "text" 
                    name = "GTLJC_lastInput" id = "GTLJC_in2" 
                    placeholder = "The Resurrection and The Life"
                    onChange={GTLJC_handleChange}
                    value={GTLJC_formData.GTLJC_lastInput}
                />
                <br/>
                <textarea
                    name = "GTLJC_textarea" id = "GTLJC_textarea" 
                    placeholder = "The Resurrection and The Life"
                    onChange={GTLJC_handleChange}
                    value={GTLJC_formData.GTLJC_textarea}
                
                />
                <br/>

                <input type="checkbox" 
                    name = "GTLJC_isSaved" id = "GTLJC_isSaved" 
                    placeholder="The Lord is ?"
                    onChange={GTLJC_handleChange}
                    checked={GTLJC_formData.GTLJC_isSaved}/>
                <label htmlFor="GTLJC_isSaved">Magnify The Lord</label>
                <br/>
                <br/>

                <fieldset>
                    <legend>Ordained Spiritual Office?</legend>

                    <input
                        type = "radio"
                        name = "GTLJC_isOrdained"
                        id = "GTLJC_isOrdained_1"
                        onChange={GTLJC_handleChange}
                         value = "Apostle"
                         checked = {GTLJC_formData.GTLJC_isOrdained==="Apostle"}
                    />
                    <label htmlFor="GTLJC_isOrdained_1">Apostle</label>
                    <input
                        type = "radio"
                        name = "GTLJC_isOrdained"
                        id = "GTLJC_isOrdained_2"
                        onChange={GTLJC_handleChange}
                        value = "Prophet"
                        checked = {GTLJC_formData.GTLJC_isOrdained==="Prophet"}
                    
                    />
                    <label htmlFor="GTLJC_isOrdained_2">Prophet</label>
                    <input
                        type = "radio"
                        name = "GTLJC_isOrdained"
                        id = "GTLJC_isOrdained_3"
                        onChange={GTLJC_handleChange}
                         value = "Teacher"
                         checked = {GTLJC_formData.GTLJC_isOrdained==="Teacher"}
                    
                    />
                    <label htmlFor="GTLJC_isOrdained_3">Teacher</label>
                    
                </fieldset>

                <label htmlFor="GTLJC_spiritual_gift">What is your given spritual gift(s) from The Lord</label>
                <select 
                id = "GTLJC_spiritual_gift"
                name = "GTLJC_spiritualGift"
                value = {GTLJC_formData.GTLJC_spiritualGift}
                onChange={GTLJC_handleChange}
                >
                    <option value = "">Graciously identify</option>
                    <option value = "Healing">Healing</option>
                    <option value = "Miracle working">Miracles</option>
                    <option value = "Faith">Faith</option>
                    <option value = "Discernment of spirits">Discernment of spirits</option>
                    <option value = "Interpretation of tongues">Interpretation of tongues</option>
                </select>

                <button>
                    my soul magnifies The Lord even now
                </button>
                
                <button onClick = {GTLJC_imageGenerator} type = "button">
                    <h3>Click to generate a Christly Image</h3>
                    <img className = "GTLJC_img" src = {GTLJC_Maranatha} alt = "" width = "10%"/>
                </button>
                <div className = "GTLJC_christlyImage">
                    <img src = {GTLJC_genImage.GTLJC_randomImage} alt = "" width = "96%"/>
                    <h2>{GTLJC_formData.GTLJC_firstInput}</h2>
                    <h2>{GTLJC_formData.GTLJC_lastInput}</h2>
                </div>
                </form>
        </div>
    )
}
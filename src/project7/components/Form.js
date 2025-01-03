// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React from "react"
import "../style.css"

export default function Form(){

    const [GTLJC_formData, GTLJC_setFormData] = React.useState({
        GTLJC_email     :       "",
        GTLJC_passwordFirst :   "",
        GTLJC_passwordSecond    :   "",
        GTLJC_isJoin    :   true

    })

    console.log(GTLJC_formData.GTLJC_passwordSecond)
    function GTLJC_handleChange(GTLJC_event){
        const {name,value,type,checked} = GTLJC_event.target
        GTLJC_setFormData((GTLJC_prevFormData)=>{
            return(
                {
                    ...GTLJC_prevFormData,
                    [name]  : type == "checkbox" ? checked : value

                }
            )
        })
    }

    function GTLJC_handleSubmit(GTLJC_event){
        GTLJC_event.preventDefault();
        console.log(`Password Graciously entered: ${[GTLJC_formData.GTLJC_passwordFirst]}
                    Password Graciously confirmed: ${[GTLJC_formData.GTLJC_passwordSecond]}
        `)
        
        if(GTLJC_formData.GTLJC_passwordFirst == GTLJC_formData.GTLJC_passwordSecond){
            console.log('Graciously the passwords match')
        }
        else{
            console.log('Graciously the passwords do not match')
            return
        }

        if(GTLJC_formData.GTLJC_isJoin){
            console.log("Thank you for joining the Salvation Army")
        }
        
    }
    return(
        <div className = "GTLJC_form">
            <form
                method = "GET"
                onSubmit = {GTLJC_handleSubmit}
            >
                <input 
                    type = "email" 
                    placeholder = "The Lord's email address? "
                    name = "GTLJC_email"
                    id = "GTLJC_email"
                    onChange = {GTLJC_handleChange}
                    value = {GTLJC_formData.GTLJC_email}
                />
                <input 
                    type = "password" 
                    placeholder = "The Lord's password? "
                    name = "GTLJC_passwordFirst"
                    id = "GTLJC_passwordFirst"
                    onChange = {GTLJC_handleChange}
                    value = {GTLJC_formData.GTLJC_passwordFirst}
                />
                <input 
                    type = "password" 
                    placeholder = "Confirm The Lord's Password ? "
                    name = "GTLJC_passwordSecond"
                    id = "GTLJC_passwordSecond"
                    onChange = {GTLJC_handleChange}
                    value = {GTLJC_formData.GTLJC_passwordSecond}
                />
                <label htmlFor="GTLJC_isJoin">
                    <input 
                        type = "checkbox" 
                        name = "GTLJC_isJoin"
                        id = "GTLJC_isJoin"
                        onChange = {GTLJC_handleChange}
                        checked = {GTLJC_formData.GTLJC_isJoin}
                    />
                    Do you want to Join The Salvation Army
                </label>
                

                <button type = "submit">
                    Graciously Submit
                </button>
            </form>
        </div>
    )
}
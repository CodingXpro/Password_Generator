import { useState } from "react"

const usePasswordGenerator=()=>{
    const [password,setPassword]=useState("");
    const[errorMessage,setErrorMessage]=useState("");

    const generatePassword=(checkboxData,length)=>{

        let charset="",
        generatePassword=""

        const selectedOption=checkboxData.filter((checkbox)=>checkbox.state)
        

        if(selectedOption.length===0){
            setErrorMessage("Select Atleast one option")
            setPassword("")
            return
        }
        
        selectedOption.forEach((option) => {
            switch(option.title){
                case "Include Uppercase Letters":
                    charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    charset+="abcdefghijklmnopqrstuvwxyz"
                    break;
                case "Include Numbers":
                    charset+="0123456789"
                    break;
                case "Include Symbols":
                    charset+="!@#$%^&*()"
                    break;
                default:
                    break;
            }
        });
        console.log(length)
        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random()*charset.length)
             generatePassword += charset[randomIndex]
        }
        setPassword(generatePassword)
        setErrorMessage("")
    }
    return {password,generatePassword,errorMessage}
}

export default usePasswordGenerator
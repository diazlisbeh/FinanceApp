import { MyContext } from "@/context/context"
import React, { useContext } from "react"


function useLogin (user) {
    // const {userData,setUserData} = useContext(MyContext);
    let userData;
   
    fetch("https://localhost:7091/User/login/",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => userData = data)
  
     
    
}


export default useLogin
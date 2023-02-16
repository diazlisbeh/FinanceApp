import { MyContext } from "@/context/context"
import React, { useContext } from "react"


const login =async (user) => {
    const {userLoged,setUserLoged} = useContext(MyContext);
    await fetch("https://localhost:7091/User/login/",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => setUserLoged(data))
}


export default login
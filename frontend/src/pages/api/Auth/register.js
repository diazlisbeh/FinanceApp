import { MyContext } from "@/context/context"
import React from "react"
import { redirect } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils";
import { useContext } from "react";
import { useRouter } from "next/router";

function register  (data) {
    // const {setUserData} = useContext(MyContext);
    // const router = useRouter()
    fetch("https://localhost:7091/User/register/",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    // .then(res => res.json())
    
    // .finally(res => router.push('/Login'))
}


export {register}
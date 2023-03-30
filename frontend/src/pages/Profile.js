import { MyContext } from "@/context/context";
import React, { useContext } from "react";


function Profile(){
    const {userData} = useContext(MyContext)

    return(
        <>
            <h1>{userData.name}</h1>

            <p>Name: {userData.name}</p>
            <p>Last Name: {userData.LastName}</p>
            <p>Email: {userData.email}</p>
        </>
    )
}


export {Profile}
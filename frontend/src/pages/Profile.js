import { MyContext } from "@/context/context";
import React, { useContext,useEffect } from "react";
import { useCookies } from "react-cookie";


function Profile(){
    const {userData,setUserData} = useContext(MyContext)
    const [cookies,setCookies] = useCookies(['user'])
    useEffect(() => {
        if(typeof cookies.user == 'undefined'){
            router.push('/Login')
        }else setUserData(cookies.user) 

    }, []);

    return(
        <>
            <h1>{userData.name}</h1>

            <p>Name: {userData.name}</p>
            <p>Last Name: {userData.lastName}</p>
            <p>Email: {userData.email}</p>
        </>
    )
}


export default Profile
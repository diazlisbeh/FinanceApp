"use client";

import { MyContext } from "@/context/context";
//import useTrasaction from "@/hooks/Transactions";
//import GetTransactions from "@/hooks/Transactions";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
//import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
//import CryptoJS from 'crypto-js';


export default function Home(){

    const {userData,transaction,setUserData} = useContext(MyContext);
    const [user, setUser] = useState()
    const [cookies,setCookies] = useCookies(['user'])
   // const {GetTransactions} = useTrasaction();

     useEffect(()=>{
        // GetTransactions(cookies.user.id);
        // console.log(cookies.transaction)
       // console.log(user)
        // console.log(userData)
        setUserData(cookies.user)
     },[]);

    //const decryptedValue = CryptoJS.AES.decrypt(getCookies('user').user, 'user').toString(CryptoJS.enc.Base64)


    return(
        <>
        <header>
            <div>FinanceApp</div>
            <div><ion-icon name="person-circle-outline"></ion-icon></div>
        </header>
        {/* <button onClick={() => console.log(console.log(getCookies(user).user))}>hollllaa</button> */}
        <button onClick={() => console.log(cookies.user)}>hollllaa</button>
        {/* <div>{ typeof window == "undefined" ? "hoad": <p>cookies.user.name</p>}</div> */}
        <div>{ userData.name}</div>

        <div>
            {/* {cookies.transaction.map(t => {
                <div>
                    <div>{t.porpuse}</div>
                    <div>{t.amount}</div>
                </div>
            })} */}
            {/* {transaction[0].amoun} */}
        </div>
        </>
    )
}

// Home.getInitialProps = ()=> {
//    const user = getCookies('user')
    // return { 
        // props:{
            // user:"hola"
// 
        // }
    // }
    
// }
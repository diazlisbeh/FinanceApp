import { MyContext } from "@/context/context";
import useTrasaction from "@/hooks/Transactions";
import GetTransactions from "@/hooks/Transactions";
import React, { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";


export default function Home(){

    const {userData,transaction,setUserData} = useContext(MyContext);
    const [cookies,setCookies] = useCookies(['user'])
    const {GetTransactions} = useTrasaction();

    // useEffect(()=>{
        // GetTransactions(cookies.user.id);
        // console.log(cookies.transaction)
        // console.log(cookies.user)
        // console.log(userData)
    // },[]);

    return(
        <>
        <header>
            <div>FinanceApp</div>
            <div><ion-icon name="person-circle-outline"></ion-icon></div>
        </header>
        <button onClick={() => console.log(cookies.user)}>hollllaa</button>
        <div>{cookies.user.capital}</div>

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
import { MyContext } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useTransactions  from "../hooks/useTransactions";

export default function Home(){

    const {userData,setUserData,transaction} = useContext(MyContext);
    const [cookies,setCookies] = useCookies(['user'])
    const {getTransactions,loaded,error} = useTransactions();
  
    useEffect(() => {
        setUserData(cookies.user) 
    }, []);

    useEffect(() => {
        getTransactions(cookies.user.id)
        console.log(transaction)
        console.log(loaded)
    },[loaded])
    
    return(
        <>
        <header>
            <nav className="container none flex justify-between mb-5">
                <div className="pt-2 pl-2">FinanceApp</div>
                <div className="pt-2 pr-2 "><ion-icon name="person-circle-outline" className="text-lg"></ion-icon></div>
            </nav>
            <div className="flex justify-center">{ userData.capital}</div>
        </header>
        
        <section>
        
            {loaded &&   (
                <div className="contaner flex flex-col">
                    {transaction.map((p) => (
                        <div key={p.transactionID} className="flex justify-around">
                            <div>{p.amount}</div>
                            <div>{p.porpuse}</div>
                        </div>
                    ))}
                </div>
            )}
        </section>

        <footer className="">
            <div><ion-icon name="add-circle-outline"></ion-icon></div>
            <div><ion-icon name="timer-outline"></ion-icon></div>
            <div><ion-icon name="wallet-outline"></ion-icon></div>
        </footer>
      
        </>
    )
}

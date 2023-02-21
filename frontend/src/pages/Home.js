import { MyContext } from "@/context/context";
import React, { useContext } from "react";


export default function Home(){

    const {userData} = useContext(MyContext);

    return(
        <>
        <header>
            <div>FinanceApp</div>
            <div><ion-icon name="person-circle-outline"></ion-icon></div>
        </header>
        <button onClick={() => console.log(userData)}>hollllaa</button>
        {/* <div>{userData.capital}</div> */}
        {/* {userData.spends.map((spend =>{ */}
             {/* <div></div> */}
        {/* }))} */}
{/*          */}
        </>
    )
}
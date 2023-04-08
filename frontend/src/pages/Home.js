import { MyContext } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useTransactions  from "../hooks/useTransactions";
import Modal from "@/Components/Modal";
import AddForm from "@/Components/AddForm";
import { useRouter } from "next/router";
import { useCategories } from "@/hooks/useCategories";



export default function Home(){

    const {userData,setUserData,transaction,categories} = useContext(MyContext);
    const [cookies,setCookies] = useCookies(['user'])
    const {getTransactions,loaded,error} = useTransactions();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    let colorRed = "text-red";
    
    const {getCategories,load} = useCategories();

    const handleClose = () =>{
        if(isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    useEffect(() => {
        if(typeof cookies.user == 'undefined'){
            router.push('/Login')
        }else setUserData(cookies.user) 

    }, []);
    useEffect(()=>{
        getCategories()
    },[load])

    useEffect(() => {
        if(typeof cookies.user == 'undefined'){
            router.push('/Login')
        }else{
        getTransactions(cookies.user.id)
        console.log(transaction)
        console.log(loaded)
        }
    },[loaded])

    return(
        <>
        <header>
            <nav className="container none flex justify-between mb-5">
                <div className="pt-3 pl-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">FinanceApp</div>
                {/* <div className="pt-2 pr-2 " onClick={()=> router.push('/Profile')}><ion-icon name="person-circle-outline" className="text-lg"></ion-icon></div> */}
                <svg data-darkreader-inline-stroke="" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-10 h-10 mr-2 mt-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
            </nav>
            <div className="flex justify-center">{ userData.capital}</div>
        </header>
        
        <section>
            {loaded &&   (
                <div className="contaner flex flex-col ">
                    {transaction.map((p) => {
                         let color = `type-${p.type}`
                         return(
                        <ul role="list" class="px-8 divide-y divide-gray-200 dark:divide-gray-700 ">
                        <li class="py-3 sm:py-4">
                            <div className={`flex items-center space-x-4 border-solid border-2 rounded-lg ${p.type ==1 ? 'border-red-500': 'border-green-500'}`}>
                             
                                <div class="flex-1 min-w-0 px-2 py-1">
                                    <p className={`text-sm font-medium ${p.type == 1 ? 'text-red-900' : 'text-green-900'} truncate dark:text-white `}>
                                    {p.porpuse}
                                    </p>
                                    <p className={`text-sm ${p.type == 1 ? 'text-red-500' : 'text-green-500'} truncate dark:text-gray-400`}>
                                        {categories.map((c) =>{
                                            if(c.id == p.categoryID) return <p>{c.name}</p>
                                        })}
                                    </p>
                                </div>
                                <div className={`inline-flex items-center text-base px-2 py-1 font-semibold ${p.type == 1 ? 'text-red-900' : 'text-green-900'} dark:text-white`}>
                                    ${p.amount}
                                </div>
                            </div>
                        </li>
                        </ul>)
                    })}
                </div>
            )}
        </section>

        <footer className="">
            <div onClick={handleClose}><ion-icon name="add-circle-outline"></ion-icon></div>
            <div onClick={()=> router.push('/History')}><ion-icon name="timer-outline"></ion-icon></div>
            <div><ion-icon name="wallet-outline"></ion-icon></div>
        </footer>

        <Modal isOpen={isOpen}
               handleClose={handleClose}>
            <AddForm handleModal={handleClose}/>
        </Modal>
      
        </>
    )
}

import { MyContext } from "@/context/context";
import React from "react";
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import {useRegister} from "@/hooks/useResgister"


export default function SignUp(){
//    const {register} = useContext(MyContext);
    const router = useRouter()
    const {register} = useRegister();
    const user = {
        name:'',
        email:'',
        lastName:'',
        password:''

    };
    const click = ()=>{
        register(user);
        router.push('/Login')

    }
    return(
        <>
        <h1>SignUp</h1>
        <form>
            <label>Name</label>
            <input type="text" onChange={(e) => user.name=e.target.value}></input>
            <label>Last Name</label>
            <input type="text" onChange={(e) => user.lastName=e.target.value}></input>
            <label>Email</label>
            <input type="email" onChange={(e) => user.email=e.target.value}></input>
            <label>Password</label>
            <input type="password" onChange={(e) => user.password=e.target.value} ></input>
        </form>
        <button type="button" onClick={()=> click()}>Click me</button>
        <p>Have an account? <Link 
            href={{pathname:'/Login'}}>Sign In</Link>
            </p>
        </>
    )
}
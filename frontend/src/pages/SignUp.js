import { MyContext } from "@/context/context";
import React from "react";
import { useContext } from "react";

export default function SignUp(){
    const {register} = useContext(MyContext);
    const user = {
        name:'',
        email:'',
        lastName:'',
        password:''

    };

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
        <button type="button" onClick={()=>register(user)}>Click me</button>
        </>
    )
}
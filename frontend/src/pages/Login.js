import React from "react";
import { MyContext } from "@/context/context";
import Link from "next/link";
function Login() {
    const {login,userData,setUserData} = React.useContext(MyContext)
    const user = {email:'',password:''}
    return(
        <>
        <h1>Login</h1>
        <form>
            <label>Name</label>
            <input type="text" onChange={(e) => user.email=e.target.value}></input>
            <label>Password</label>
            <input type="password" onChange={(e) => user.password=e.target.value}></input>
        </form>
        <button type="button" onClick={()=>login(user)}>Click me</button>
        <p>Don't have an account? <Link 
            href={{pathname:'/SignUp'}}>Sign Up</Link>
            </p>
        </>
    )
}

export default Login;
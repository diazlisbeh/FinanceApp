import React from "react";
import { MyContext } from "@/context/context";
import Link from "next/link";
import { useRouter } from "next/router";
function useLogin() {
    
    const {login,userData,setUserData} = React.useContext(MyContext)
    const user = {email:'',password:''}
    const router = useRouter();

    const onLogin = async()=>{
        console.log(login(user))
        //router.push('/Home')
        console.log(userData)

    }

    return(
        <>
        <h1>Login</h1>
        <form>
            <label>Email</label>
            <input type="text" onChange={(e) => user.email=e.target.value}></input>
            <label>Password</label>
            <input type="password" onChange={(e) => user.password=e.target.value}></input>
        </form>
        <button type="button" onClick={()=>onLogin()}>Click me</button>
        <p>Don't have an account? <Link 
            href={{pathname:'/SignUp'}}>Sign Up</Link>
            </p>
            <button onClick={() => console.log(userData)}>Another button</button>
        </>
    )
}

export default useLogin;
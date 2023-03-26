import React, { useEffect,useState } from "react";
import { MyContext } from "@/context/context";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import useAuth, {login} from "@/hooks/useAuth";
function Login() {
    
    const {userData,setUserData} = React.useContext(MyContext);
    const [cookies, setCookies] = useCookies(['user'])
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const router = useRouter();
    const {login} = useAuth();

    const onLogin = async()=>{

        await login(email,password)
        //router.push('/Home')
        console.log({email,password})

    }

    useEffect(()=>{
        if(typeof cookies.user == 'object' ){
            router.push('/Home')
        }
    })

    return(
        <>
        <h1>Login</h1>
        <form>
            <label>Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
            <label>Password</label>
            <input type="password" onChange={(e) =>  setPassword(e.target.value)}></input>
        </form>
        <button type="button" onClick={()=>onLogin()}>Click me</button>
        <p>Don't have an account? <Link 
            href={{pathname:'/SignUp'}}>Sign Up</Link>
            </p>
            <button onClick={() => console.log(userData)}>Another button</button>
        </>
    )
}

export default Login;
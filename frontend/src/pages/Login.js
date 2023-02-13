import React from "react";
import { Context } from "@/context/context";
function Login() {
    const {login} = React.useContext(Context)
    return(
        <>
        <h1>Login</h1>
        <button type="button" onClick={()=>login()}>Click me</button>
        </>
    )
}

export default Login;
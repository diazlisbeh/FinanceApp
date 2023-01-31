
import React from "react";

function Login(){
    return(
        <>

        <h2 className="signup-title" >Log in</h2>
        <form className="">
            
            <label htmlFor="email">Email</label>
            <input type="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password"></input>
            
            <button>Log in</button>
        </form>
        </>
    )
}
export {Login}
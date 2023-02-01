import React from "react";
import { NavLink } from "react-router-dom";

function Login(){
    return(
        <>

        <h2 className="signup-title text-red" >Log in</h2>
        <form className="">
            
            <label htmlFor="email">Email</label>
            <input type="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password"></input>
            
            <button>Log in</button>

            <p>Don't have an acount? <NavLink to="signup">Sign Up</NavLink></p>
        </form>
        </>
    )
}
export {Login}
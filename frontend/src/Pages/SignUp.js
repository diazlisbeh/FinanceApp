import React from "react";
import './SignUp.css';
import { NavLink } from "react-router-dom";


function SignUp(){
    return(
        <>
        <h2 className="text-red italic" >Sign Up</h2>
        <form className="">
            <label htmlFor="name">Name</label>
            <input type="text"></input>

            <label htmlFor="last-name">Last Name</label>
            <input type="text"></input>

            <label htmlFor="email">Email</label>
            <input type="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password"></input>

            <button >Sign Up</button>
            <p>Have an Acount? <NavLink to="Login">Login</NavLink></p>
        </form>
        </>
    )
}
export {SignUp}
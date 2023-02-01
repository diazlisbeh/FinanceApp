import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {SignUp} from "./Pages/SignUp.js";
import {Login} from "./Pages/Login";
import {History} from "./Pages/History";
import {Home} from "./Pages/Home";
import {NotFound} from "./Pages/NotFound";
import {Profile} from "./Pages/Profile";
import { loginUser } from "./Utils/UserApi";

function App() {
//  let user = {
    // email:"lizz@email.com",
    // password: "password"
//  }
  // useEffect(()=>{
    // loginUser(user)
  // },[])

  return (
    <>
    <p className="text-xl italic">Hola</p>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="profile/" element={<Profile/>} />
          <Route path="/Budget" element={<SignUp/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

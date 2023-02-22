//import { Fenix } from "@next/font/google";


export default function register(user){

    fetch('https://localhost:7091/User/register',{

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify (user),
    });
    return {register}

}
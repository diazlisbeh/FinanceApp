import { MyContext } from "@/context/context";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState();
  const {userData,setUserData} = useContext(MyContext)
  const router = useRouter();
  const login = async (email, password) => {
    try{
    const response = await fetch("https://localhost:7091/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify ({ email, password }),
    })
    
    if(!response.ok){
      alert("usuario o contrasena incorrecto")
      throw new Error(`Error: ${response.status}`)
    }
    response.json().then(data => setUserData(data)).finally(() => router.push('/Home'))
      
  }  catch(err){
    console.log(err)
  }    
  }  
      
  //    .catch(err => console.log(err))
      
  
  return { login };
}

import { MyContext } from "@/context/context";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useCookies } from "react-cookie";
//import { getCookies, removeCookies, setCookie } from 'cookies-next';

export default function useAuth() {
  const [user, setUser] = useState();
  const {userData,setUserData} = useContext(MyContext)
  const [cookies,setCookies,removeCookies] = useCookies(['user'])
  const router = useRouter();
  
  const login = async (email, password) => {
    // removeCookies('user')
    // removeCookies('transaction')
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
    response.json()
    .then(data => {
     setCookies('user',data)} )
    // .then(data => setUserData(cookies.user))
    .finally(() => router.push('/Home'))
      
  }  catch(err){
    console.log(err)
  }    
  }  
      
  //    .catch(err => console.log(err))
      
  
  return { login };
}


useAuth.getInitialProps = ()=>{
   const initialUser = {}

  return{
    props:{
      initialUser
    }
  }
}
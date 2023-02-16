import React,{useState} from "react";
import login from "@/pages/api/Auth/login";
import { register } from "@/pages/api/Auth/register";


const MyContext = React.createContext();

function Provider({children}) {
    const [userData, setUserData] = useState({});
    const [userLoged, setUserLoged] = useState({});
    return(
        <MyContext.Provider value={{login,userData,setUserData,register,userLoged,setUserLoged}}>
            {children}
        </MyContext.Provider>
    )
}

export {Provider, MyContext}
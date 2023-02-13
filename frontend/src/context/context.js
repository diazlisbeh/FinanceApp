import React from "react";
import login from "@/pages/api/Auth/login";


const MyContext = React.createContext();

function Provider(props) {
    return(
        <MyContext.Provider value={{login}}>
            {props.clidren}
        </MyContext.Provider>
    )
}

export {Provider, MyContext}
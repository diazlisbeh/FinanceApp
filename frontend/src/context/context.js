import React from "react";
import login from "@/pages/api/Auth/login";


const MyContext = React.createContext();

function Provider({children}) {
    return(
        <MyContext.Provider value={{login}}>
            {clidren}
        </MyContext.Provider>
    )
}

export {Provider, MyContext}
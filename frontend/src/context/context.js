import React from "react";
import login from "@/pages/api/Auth/login";


const MyContext = React.createContext('');

function Provider({children}) {
    return(
        <MyContext.Provider value={{login}}>
            {children}
        </MyContext.Provider>
    )
}

export {Provider, MyContext}
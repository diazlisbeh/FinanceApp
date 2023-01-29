import React from "react";

const url = "https://localhost:7091/user/"


 function loginUser(user){

     fetch(url+"login/",{
        method:'POST',
         headers:{
         'Content-Type':'application/json',
         'Access-Control-Allow-Origin': '*'
        },
       body:JSON.stringify(  user) 
        
    })
    .then(res => res.json())

    .then(res => console.log(res))

}

export {loginUser}
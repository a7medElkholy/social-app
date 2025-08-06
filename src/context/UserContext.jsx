import { createContext, useState } from "react";

 export const userContext =  createContext  (null);

 import React from 'react'
 import  axios  from 'axios';
import { useNavigate } from "react-router";

 export default function UserContextProvider({children}) {

    const [userData , SetUserData] = useState(null);
    const value = {userData , SetUserData , getUserData , logOutUser}
    const router = useNavigate();

    async function getUserData (token){
  
    try {
    const {data} = await axios("https://linked-posts.routemisr.com/users/profile-data",{
        method: "GET" ,
        headers: {token : token },
      })
      SetUserData(data?.user);

    } catch (error) {
      console.log(error);
      
    }
    
  }

  function logOutUser(){
    localStorage.clear()
    router("/Login")
    SetUserData(null)
  }


   return (
     <userContext.Provider value = {value} >{children}</userContext.Provider>
   )
 }
 
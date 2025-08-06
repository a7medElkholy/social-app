import React from 'react'
import { Navigate } from 'react-router';

export default function AuthProtectedRoutes({children}) {

    if(localStorage.getItem("token")){
        return <Navigate to={"/Login"} />
    }

    else{
         return children ;
    }
}

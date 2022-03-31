import React, { Children } from "react";
import { useLocation, Navigate } from "react-router-dom";

const RecuireAuth = ({children}) => {
    const location = useLocation ()
    const auth = false

    if (!auth){
        return <Navigate to="/login" state={{from: location}}/>
    }

    return children


};

import React, {useState,useEffect,createContext} from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ( {children} ) =>{

    const navigate = useNavigate();

    const[user,setUser] = useState(null);
    const[loading,setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    },[]);

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return(
        <AuthContext.Provider value = {{authenticated: !!user,user,loading,logout}}>
            {children}
        </AuthContext.Provider>

    );
}
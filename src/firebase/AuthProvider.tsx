import React from "react";
import { useEffect,useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "./firebase";
import { User } from "firebase/auth";

export default function AuthProvider({children}:any)
{
    const [user,setuser] = useState<User |null>(null);

    useEffect(()=>{
        const subscribe = auth.onAuthStateChanged((myuser)=>{
            setuser(myuser);
        });
        return subscribe;
    },[]);

    return (<AuthContext.Provider value={user}>
        {children}
        </AuthContext.Provider>);
};
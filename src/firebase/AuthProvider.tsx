import React from "react";
import { useEffect,useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "./firebase";
import { User } from "firebase/auth";

export default function AuthProvider({children}:React.PropsWithChildren<any>)
{
    const [user,setuser] = useState<User |null>(null); // 사용자 상태 관리 

    useEffect(()=>{
        const subscribe = auth.onAuthStateChanged((myuser)=>{
            setuser(myuser);
        });//auth.onAuthstateChanged 사용자의 인증 상태 변화를 감지하는 함수
        return subscribe;
    },[]);

    return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
    );//AuthContext.Provider를 사용해 하위 컴포넌트에 사용자 상태를 전달.
};
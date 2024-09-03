import React from "react";
import { User } from "@firebase/auth";


export const AuthContext = React.createContext<User | null>(null);
//// 사용자 인증 정보를 전역으로 관리하기 위한 React 컨텍스트를 생성.
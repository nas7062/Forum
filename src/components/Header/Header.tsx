import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
const Head = styled.h2`
    text-align :center;     
    margin-top:0px;
    & > h2{
        font-size:4.5rem;
        display:inline-block;
    }
    & > a{
        position:relative;
        left:30%;
        font-size:2.0rem;
        cursor:pointer;
    }
    & > span{
        position:relative;
        left:30%;
        font-size:2.0rem;
        cursor:pointer;
    }
`
export default function Header()
{   
    const userInfo = useContext(AuthContext);
    const LogoutHandler =()=>{
        signOut(auth);
    }
    return(
        <Head>
            <h2>마음의 소리</h2>
            
            
            {!userInfo ? <Link to={"/join"}><span>로그인</span></Link>
             :<span onClick={LogoutHandler}>로그아웃</span>
            }
            
        </Head>
    );
}
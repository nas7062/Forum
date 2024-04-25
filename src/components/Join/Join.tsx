import { createUserWithEmailAndPassword,
signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState} from "react";
import { auth } from "../../firebase/firebase";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Box = styled.div`
    width:600px;
    height:400px;
    background-color:white;
    position:absolute;
    left:30%;
    top:30%;
    border:1px solid black;
    border-radius:5%;
    & > form {
        position:absolute;
        top:20%;
    }
    & > a{
        text-align:center;
        
    }
`
const Input = styled.input`

    display:block;
    width:490px;
    height:30px;
    position:relative;
    left:50px;
    top:-10px;
`
const Label = styled.label`
position:relative;
top:20px;
font-size:1.0rem;
`
const Btn = styled.button`
    width:500px;
    height:40px;
    margin-top:20px;
    position:relative;
    left:50px;
    background-color:black;
    color:white;
    font-size:1.2em;
    cursor:pointer;
`

export default function Join() {
    const [email, setemail] = useState<string>(""); 
    const [password, setpassword] = useState<string>("");
    const [isCreate, setisCreate] = useState<boolean>(false); //회원가입 상태와 로그인 상태 변경 
    const Navigate = useNavigate(); //페이지 이동
    const NameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setemail(e.target.value);
    }
    const PasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setpassword(e.target.value);
    }
    const JoinHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setisCreate((prev) => !prev); 
    }
    const JoinSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isCreate) { //회원가입 모드인 경우
            createUserWithEmailAndPassword(auth, email, password)// Firebase에 이메일과 비밀번호로 사용자 생성 요청하는 함수
            .then(() => {
                    alert("회원가입 성공");
                })
            .catch(e => {
                    alert(e);
                })
        }
        else{
            signInWithEmailAndPassword(auth,email,password)// Firebase에 이메일과 비밀번호로 로그인 요청하는 함수
            .then(()=>{
                alert("로그인 성공");
                Navigate("/"); //메인페이지 이동
            })
            .catch(e=>{
                alert(e);
            })
        }
    }
    console.log(isCreate);
    return (
        <Box>
            <Link to="/"><h2>마음의 소리</h2></Link>
            <form onSubmit={JoinSubmit}>
                <Label >이메일</Label>
                <Input type="text" name="email" onChange={NameHandler} value={email} />
                <Label >비밀번호</Label>
                <Input type="password" name="password" onChange={PasswordHandler} value={password} />
                <Btn type="submit"> {isCreate ? "만들기" : "로그인"}</Btn>
                <Btn type="button" onClick={JoinHandler}>
                    {isCreate ? "취소" : "회원가입"}
                </Btn>
            </form>
        </Box>

    );
}
import { useCallback, useState,useContext } from "react";
import Header from "../Header/Header";
import List from "../List/List";
import Modal from "../Modal/Modal";
import styled from "styled-components";
import { AuthContext } from "../../firebase/AuthContext";


export interface postType {
    
    postList:ListType[]
    OpenModal :()=>void;
    AddReple :(id:number,reples:string)=>void
}
export interface ModalType{
    OpenModal :()=>void;
    AddPost :(title:string,desciprt:string,UserId?:string | undefined)=>void;
}
export interface ListType {
    id:number;
    title:string;
    name?:string;   
    descript?:string
    reples? :string[]
}   
export interface RepleType {
    reples :string
}
export default function Home()
{   
    const userInfo = useContext(AuthContext);
    
    const initialPostList :ListType[] = [
        {id : 1, title : "프론트 공부 열심히 해.", name: "민석", descript:`저는 일단 서울에서 1살 된 아기를 키우고 있는 아빠고 저는 회사를 다니고 있습니다.
        와이프는 공무원이고 현재 육아 휴직을 쓰고 있고요...
        
        그런데 이번에 회사에서 제가 하고 있는 프로젝트를 진행하는 부서 자체가 사라질 거라는 이야기를 들었고
        (임원진께서 직접 전달 한 내용이라 거의 확실하다는 군요)
        부서에 있는 사람들 대부분이 2-3달 사이에 정리 해고 혹은 자진 퇴사할(시킬) 거라는 이야기였습니다.
        문제는 여기서 시작입니다...
        
       
       `,reples :["고생하시네요","안타까워요","asdasdasd"]  }, 
        {id : 2, title : "프론트 공부 열심히 해.", name: "민석", descript:"asdasdasdasdasdasd" ,reples :["고생하시네요","안타까워요","asdasdasd"]}, 
        {id : 3, title : "프론트 공부 열심히 해", name: "민석" ,descript :"asdasdasdasdasdasd", reples :["고생하시네요","안타까워요","asdasdasd"]},
    ];
    
    const [postList,setpostList] = useState<ListType[]>(JSON.parse(localStorage.getItem("PostData") || '{}')  );
    const [isModal,setisModal] = useState<boolean>(false);
    
    const AddPost = (title:string,descript:string,) =>{
        
        const newPost: ListType = {
            id: postList.length + 1,
            title:`${title}`,
            descript:`${descript}`,
            name:`${userInfo?.providerData[0].uid.slice(0,3)}*****`,
        };
        setpostList((postList)=>[
            ...postList, newPost
        ]);
        localStorage.setItem("PostData", JSON.stringify([...postList,newPost]));
    };
   
    const AddReple = (id:number ,reples:string)=>{
        const targetPostIndex = postList.findIndex(post => post.id === id);
    
    if (targetPostIndex !== -1) { 
        
        const newReple = [...postList];
       
        newReple[targetPostIndex].reples = [...(newReple[targetPostIndex].reples || []), reples];
        
        setpostList(newReple);
        localStorage.setItem("PostData", JSON.stringify(newReple));
    }
    }
    const OpenModal= useCallback(()=>
    {  
        setisModal(!isModal);
    },[isModal]);   

    console.log(postList);
    return(
        <>
        <Header/>
        <List  postList = {postList}  OpenModal={OpenModal} AddReple ={AddReple}/>
        {isModal && <Modal OpenModal={OpenModal} AddPost={AddPost} />}
        </>
    );
}
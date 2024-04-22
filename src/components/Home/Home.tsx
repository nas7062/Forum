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
        {id : 1, title : "아이 육아문제", name: "아이와*****", descript:`저는 일단 서울에서 1살 된 아기를 키우고 있는 아빠고 저는 회사를 다니고 있습니다.
        와이프는 공무원이고 현재 육아 휴직을 쓰고 있고요...
        
        그런데 이번에 회사에서 제가 하고 있는 프로젝트를 진행하는 부서 자체가 사라질 거라는 이야기를 들었고
        (임원진께서 직접 전달 한 내용이라 거의 확실하다는 군요)
        부서에 있는 사람들 대부분이 2-3달 사이에 정리 해고 혹은 자진 퇴사할(시킬) 거라는 이야기였습니다.
        문제는 여기서 시작입니다...
        
       
       `,reples :["고생하시네요","안타까워요"]  }, 
        {id : 2, title : "콘서트 관람 문제", name: "관객이*****", descript:`언제 가도 돈이 아깝다는 생각이 전혀 들지 않고 맨날 가고 싶다는 생각이 드는 아이유 콘서트!
        콘서트 자체에 볼거리도 많고 노래도 잘 부르고!! 예쁘고 착하고 말도 잘하고 2024년 올해도 정말 덕분에 행복했습니다🥰
        그리고 매번 느끼지만 음원이랑 라이브랑 정말 똑같아서 신기해요 ㅋㅋㅋㅋ매년 이렇게 또 만나고 싶어요ㅎㅎㅎ🩷
        그리고 확실히 콘서트를 많이 해 본 가수라 그런지 공연장도 굉장히 질서정연하게 유지되었고 사람들의 편의를 많이 봐준 느낌이었어요!!!!
        아마 누가 가더라도 후회하지 않으실 겁니다 ` ,reples :["부럽습니다..","다음엔 꼭 가고싶어요",]}, 
        {id : 3, title : "드라마를 보고..", name: "눈물의*****" ,descript :`눈물의여왕 너무 재밌어요 꼭 다들 보셨으면 해요`, reples :["재밋겠네요","저도 매주 챙겨봐요","다음주도 기대되요!"]},
    ];
    
    const [postList,setpostList] = useState<ListType[]>(JSON.parse(localStorage.getItem("PostData") || '[]') || initialPostList);
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
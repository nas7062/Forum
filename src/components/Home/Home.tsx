import { useCallback, useState } from "react";
import Header from "../Header/Header";
import List from "../List/List";
import Modal from "../Modal/Modal";
import styled from "styled-components";


export interface postType {
    isLoading: boolean;
    isPost:boolean;
    postList:ListType[]
    AddPost :any;
    OpenModal :()=>void;
}
export interface ModalType{
    OpenModal :()=>void;
}
export interface ListType {
    id:number;
    title:string;
    name?:string;
    
}

export default function Home()
{   
    const initialPostList :ListType[] = [
        {id : 1, title : "리액트 공부는 재미있어.", name: "민석"},
        {id : 2, title : "프론트 공부 열심히 해.", name: "민석"}, 
        {id : 3, title : "파이팅^^.", name: "민석"},
    ];
    const [isLoading,setisLoading] = useState<boolean>(false);
    const [isPost,setisPost] = useState<boolean>(false);
    const [postList,setpostList] = useState<ListType[]>(initialPostList);
    const [isModal,setisModal] = useState<boolean>(false);
    const AddPost = () =>{
        const newPost: ListType = {
            id: postList.length + 1,
            title:`very good ${postList.length+1}`,
             
        };
        setpostList((postList)=>[
            ...postList, newPost
        ]);
    };
    const OpenModal= useCallback(()=>
    {  
        setisModal(!isModal);
    },[isModal]);

    console.log(isModal);
    return(
        <>
        <Header/>
        <List isLoading={isLoading} isPost = {isPost} postList = {postList} AddPost= {AddPost} OpenModal={OpenModal} />
        {isModal && <Modal OpenModal={OpenModal} />}
        </>
    );
}
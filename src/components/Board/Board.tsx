import styled from "styled-components";
import { ListType } from "../Home/Home";
import React, { useCallback, useMemo, useState } from "react";

const Table = styled.table`
border-collapse: collapse;
width: 55%;
text-align:center;
position:relative;
left:25%;

 & > th ,td{
    padding:20px 50px;
    width:50%;
    position:relative;
    left:2%;
    border-bottom:1px solid white;
    color:yellow;
    padding-right:100px;
    
 }
 
 & > tr th{
    color:yellow;
    left:0%;
    position:relative;
    padding:30px 50px;
    
 }
 & >tr span{
    color:red;
    position:relative;
    left:-270px;
    top:30px;
 }
 
 & td:nth-child(2) {
   cursor:pointer;
   
 }
`
const Box = styled.div`
    width:500px;
    height:500px;
    display: flex;
    position:relative;
    left:450px;
    flex-direction: column;
    align-items: center;
    border: 3px solid grey;
    border-radius: 5%;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.5);
    box-sizing: border-box;
    background-color: white;  
    z-index: 1;
`
const Box2 = styled.div`
    width:400px;
    height:400px;
    display: flex;
    position:relative;
    left:950px;
    top:-500px;
    flex-direction: column;
    align-items: center;
    border: 3px solid grey;
    border-radius: 5%;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.5);
    box-sizing: border-box;
    background-color: white;  
    z-index: 1;
    
    & > p{

        border-bottom :1px solid black;
        width:400px;
        padding-bottom:10px;
        font-size:1.2em;   
    }
   
`
const Reple = styled.div`

& > label {
    display:inline;
}
& > input {
    display:inline;
}
`
interface BoardType {
    postList: ListType[];
    AddReple :(id:number,reples:string)=>void;
}
export default function Board({ postList,AddReple}: BoardType) {
    const [clickedPostId, setClickedPostId] = useState<number | null>(null);
    const [reples,setreples] = useState<string>("");
    const [isReple,setisReple] = useState<boolean>(false);
    const RepleInput = (e:React.FormEvent<HTMLInputElement>)=>{
        setreples(e.currentTarget.value);
    }
    const OpenReple= useCallback(()=>
        {  
            setisReple(!isReple);
        },[isReple]);
    const ClickHandler = (postId: number) => {
        setClickedPostId(clickedPostId === postId ? null : postId);
    }
    const CountReples = (post:ListType | undefined)=>{
        return post ? post.reples?.length : 0;
    }
    const replesCount = useMemo(() => {
        if (clickedPostId !== null) {
          const clickedPost = postList.find(post => post.id === clickedPostId);
          if (clickedPost) {
            return CountReples(clickedPost);
          }
        }
        return 0;
      }, [clickedPostId, postList]);
    const SubmitHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (clickedPostId !== null) {
            AddReple(clickedPostId, reples); // 게시물의 ID와 댓글 내용을 함께 전달
        }
        setreples("");
    
    }
    return (

        <Table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
            </tr>
            {postList && postList.map((post) => (
                <>
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td onClick={() => ClickHandler(post.id)}>{post.title}</td>
                        <td>민석</td>
                        <span>({CountReples(post)})</span>
                        
                    </tr>
                    {clickedPostId === post.id && 
                    (<>
                    <Box>
                        <span>{post.descript}</span>
                        
                        </Box>
                    
                    <Box2>
                    <span onClick={OpenReple}>댓글달기</span>
                        {isReple && ( <Reple><label> 댓글:</label>
                        <input type="text" onChange={RepleInput} value ={reples} />
                        <button onClick={SubmitHandler}>댓글달기</button> 
                        </Reple>  )       
                        }
                    {post.reples?.map((reple,index)=>(
                        <p key={index}>{reple}</p>

                    ))}
                    
                    </Box2>
                    
                    </>
                    
                    )}
                    
                       
                </>
            ))}
            


        </Table>

    );
}
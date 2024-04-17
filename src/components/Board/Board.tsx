import styled from "styled-components";
import { ListType } from "../Home/Home";

const Table =styled.table`
border-collapse: collapse;
width: 50%;
text-align:center;
position:relative;
left:20%;
 & > th,td{
    padding:10px 90px;
    position:relative;
    left:0px;
    border-bottom:1px solid grey;
    
 }
 
 

`
interface BoardType {
    postList:ListType[];
}
export default function Board({postList}:BoardType)
{
    return(
        <Table>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
        </tr>
        {postList.map((post) => (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td> {/* 제목을 post.title로 변경해야 합니다 */}
                <td>민석</td>
            </tr>   
        ))}
        
    </Table>
       
    );
}
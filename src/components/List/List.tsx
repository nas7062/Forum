import { postType } from "../Home/Home";
import styled from "styled-components";
import Board from "../Board/Board";
const StlyePost = styled(Board)`

    text-align :center;
    font-size:1.5em;
    
`;
const Btn =styled.div`
    text-align:center;
    position:relative;
    left:350px;
    top:-50px;
    font-size:1.5rem;
    cursor:pointer;
`
export default function List({ postList,OpenModal,AddReple }: postType) {
   
    
    return (
        <>

            <Btn onClick={OpenModal}>
                고민 털어놓기
            </Btn>
            <StlyePost postList={postList} AddReple ={AddReple}/>

        </>
    );
}
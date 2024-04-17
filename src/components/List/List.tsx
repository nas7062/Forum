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
`
export default function List({ isLoading, isPost, postList, AddPost }: postType) {
    return (
        <>

            <Btn onClick={AddPost}>
                고민 털어놓기
            </Btn>
            <StlyePost postList={postList} />


        </>
    );
}
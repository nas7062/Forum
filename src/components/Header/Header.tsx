import styled from "styled-components";

const Head = styled.h2`
    text-align :center;     
    margin-top:0px;
    & > h2{
        font-size:4.5rem;
        display:inline-block;
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
    return(
        <Head>
            <h2>마음의 소리</h2>
            <span>로그인</span>
        </Head>
    );
}
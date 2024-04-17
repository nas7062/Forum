import styled from "styled-components";
import { ModalType } from "../Home/Home";

const Modalbody = styled.div`
    
    top:0px;
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color :rgb(0,0,0,0.4);

`
const Box = styled.div`
width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid grey;
  border-radius: 5%;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.5);
  box-sizing: border-box;
  background-color: white;  
  z-index: 1;

  & > h2 {
    font-size:2.5rem;
  }
  & > span{
    position:relative;
    top:-120px;
    left:380px;
    font-size:2.5rem;
    color:red;
    cursor:pointer;
  }
`
const Input =styled.div`
  
  position:absolute;
  left:30%;
  top:30%;
  & > label{
    font-size:2.0rem;
  }
  

`
const InputBox = styled.input<{area:number}>`

    margin-top:50px;
    width:650px;
    height:${(props)=>props.area +"px"};
    font-size:1.5rem;
    
  

`
export default function Modal({OpenModal}:ModalType) {

        
    return (
        <Modalbody>
            <Box>
                <h2>고민 상자</h2>
                <span onClick={OpenModal}>X</span>
                <Input >
                    <label>제목:</label>
                    <InputBox area={50} type="text" />
                    <br/>
                    <label >고민:</label>
                    <InputBox area={200} type="text"  />
                </Input>
            </Box>  
        </Modalbody>
        
    );

}
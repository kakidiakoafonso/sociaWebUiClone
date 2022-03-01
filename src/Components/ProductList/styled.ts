import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
width:90%;
height:80%;
display:flex;
position: relative;
`
export const Left = styled.div`
width:100%;
height:100%;
overflow-y: scroll;
justify-content: center;

&::-webkit-scrollbar{
    background-color: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${colors.primary};
        scrollbar-width: 2px;
        border-radius: 4px;
    }
`
export const ProductContainer = styled.div`
width:70%;
height:130px;
padding: 4% 0px;
display:flex;
align-items: center;
background-color: #fff;
border-radius: 8px;
border: 3px solid 	rgba(133, 20, 142,.3);
margin: 10px 0px;
`
export const Image = styled.img`
width:100px;
height:100px;
border-radius: 8px;
border: 3px solid 	rgba(133, 20, 142,.3);
margin-left: 3%;
`
export const LeftWrapper = styled.div`
width:80%;
height:100px;
display:flex;
margin-left: 1%;
flex-direction: column;
/* background-color: red; */
`
export const LeftTop = styled.div`
width:100%;
height:30%;
display:flex;
justify-content: space-between;
align-items: center;
`
export const LeftNomeText = styled.div`
color: ${colors.primary};
font-weight: bold;
`
export const LeftPrecoText = styled.div`
color: #8e8e8e;
font-weight: bold;
`
export const LeftIcon = styled.div`
color: red;
`
export const LeftButtonQtd = styled.div`
width: 150px;
margin-top: 15px ;
`
export const Right = styled.div`
width:300px;
height:200px;
right: 30px;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: absolute;
border-radius: 6px;
background-color: #F0F0F0;
box-shadow: 2px 2px 15px 2px #ccc;
`

export const Content = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2px;
`
export const Label = styled.div`
color: ${colors.primary};
font-weight: bold;
font-size: 14px;
`
export const Value = styled.div`
color: rgba(0,0,0,.8);
font-weight: bold;
font-size: 14px;
`
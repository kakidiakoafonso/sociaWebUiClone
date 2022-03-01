import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.button`
background-color: ${colors.primary};
border-radius: 6px; 
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
font-size: 14px;
color: #fff;
margin-top: 10px;
border: none;
&:hover{
    cursor: pointer;
}
`


export const SecondButton = styled.button`
background-color: #ffff;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(204, 204, 204, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: flex;
align-items: center;
justify-content: center;
color: ${colors.primary};
border: 1px solid #ccc;
font-weight: bold;
&:hover{
    cursor: pointer;
}
`


export const ContainerButtonQuantidade = styled.div`
width: 95%;
height: 30px;
/* background-color: ${colors.primary}; */
border: 2px solid 	rgba(133, 20, 142,.3);
border-radius: 6px; 
display: flex;
align-items: center;
justify-content:space-between;
flex-direction: row;
font-size: 18px;
font-weight: bold;
color: #fff;
margin: 0px;
`


export const PlusMinusBtn = styled.button`
height: 20px;
width: 20px;
background-color: #fff;
border: none;
border-radius: 8px;
margin: 0px 10px;
display: flex;
align-items: center;
justify-content:center;
color: ${colors.primary};
&:hover
{
    cursor: pointer;
}
`

export const QtdadeText = styled.p`
color: ${colors.primary};
`
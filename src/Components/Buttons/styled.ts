import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.button`
width: 80%;
height: 40px;
background-color: ${colors.primary};
border-radius: 6px; 
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
font-size: 18px;
font-weight: bold;
color: #fff;
margin-top: 10px;
border: none;
&:hover{
    cursor: pointer;
}
`


export const SecondButton = styled.button`
width: 400px;
height: 40px;
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
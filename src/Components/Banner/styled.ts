import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.footer`
width: 87%;
height: 350px;
margin: auto;
background-color: #f0f0f0;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-top: 50px;
`
export const Left = styled.div`
width: 50%;
height: 100%;
background-color: #F0F0F0;
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction:column;
position:relative;
`

export const Text = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
color: #000;
font-weight: bold;
font-size: 22px;
margin-left:3% ;
margin-top:15px;
`
export const TextCarro = styled(Text)`
opacity:.5;
margin-top:25px;
`
export const TextUnidades = styled(Text)`
font-weight: 100;
opacity:.5;
font-size:15px;
margin-top:5px;
`
export const TextPreco = styled(Text)`
opacity:.5;
margin-top:25px;
font-size:50px;
`

export const Right = styled.div`
width: 50%;
height: 100%;
background-color: ${colors.primary};
display: flex;
align-items: center;
justify-content: flex-end;
border-radius: 200px 0 0 200px ;
`


export const CarImage = styled.img`
width: 300px;
height: 300px;
border-radius: 10px;
margin-right: 4%;
`


export const Button = styled.div`
width: 200px;
height:50px;
display: flex;
align-items: center;
justify-content: center;
position:absolute;
bottom:30px;
left:10px;
`

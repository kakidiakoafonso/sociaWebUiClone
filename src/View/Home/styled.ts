import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
width: 100vw;
height: 67vh;

/* display: flex; */
/* background-color: red; */
`
export const Wrapper = styled.div`
width: 85%;
margin: auto;
/* background-color: red; */
`
export const CategoryContainer = styled.div`
height: 50px;
margin: auto;
display: flexbox;
align-items: center;
`
export const CategoryText = styled.div`
color: ${colors.primary};
font-size: 20px;
font-weight: bolder;
margin-right: 10px;
`
export const Separador = styled.div`
background-color: #ccc;
height: 40%;
width: 2px;
margin-right: 10px;
`
export const ContainerTextIcon = styled.div`
display: flex;
`
export const VerTodosText = styled.div`
color: #222;
opacity: .7;
font-size: 13px;
font-weight: bolder;
margin-right: 5px;
`
export const CardsContainer = styled.div`
flex: 1;
/* background-color: #ccc; */
display: flexbox;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;

`
export const FloatContainer = styled.div`
width: 60px;
height: 110px;
position:fixed;
bottom:20px;
right:20px;
z-index: 2;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`
export const Up = styled.button`
width: 50px;
height: 50px;
background-color: #fff;
border-radius: 50%;
box-shadow: 3px 3px 10px 2px rgba(0,0,0,.5);
color: ${colors.primary};
display: flex;
justify-content: center;
align-items: center;
border: none;
&:focus{outline:none}
&:hover{cursor: pointer;}
`
export const Cart = styled.button`
width: 50px;
height: 50px;
background-color:${colors.primary};
border-radius: 50%;
box-shadow: 3px 3px 10px 2px rgba(0,0,0,.5);
color: #fff;
display: flex;
justify-content: center;
align-items: center;
border: none;
position: relative;
&:focus{outline:none}
&:hover{cursor: pointer;}
`

export const Badge = styled.div`
width: 27px;
height: 27px;
border-radius: 50%;
position:absolute;
background-color: #FA78FF;
left:-10px;
top:17px;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const BadgeText = styled.div`
color: #fff;
font-weight: bold;
font-size: 15px;
`
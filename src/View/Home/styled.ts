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
import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.footer`
width: 100%;
height: 150px;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #c7c7c7;
margin-top: 50px;
`
export const StoresContainer = styled.div`
width: 100%;
height: 80%;
background-color: #F0F0F0;
display: flex;
align-items: center;
justify-content: center;
font-size: 32px;
font-weight: bold;
color: #000;
`


export const RightsContainer = styled.div`
width: 100%;
height: 20%;
background-color: #FFF;
display: flex;
align-items: center;
justify-content: center;
font-size: 32px;
font-weight: bold;
`
export const Text = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
color: ${colors.primary};
`
export const Links = styled.div`
margin: 0px 10px;
color: ${colors.grey80};
:hover{
    cursor:pointer;
}
`
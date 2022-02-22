import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
width: 90%;
height: 130px;
/* background-color: red; */
margin: 10px auto;
display: flexbox;
justify-content: space-between;
align-items: center;
position: relative;
`;
export const ImageContainer = styled.div`
width: 106px;
height: 106px;
display: flex;
justify-content: center;
align-items: center;
margin: 10px auto;
border-radius: 53px;
background-color: ${colors.primary};
opacity: .6;
`;
export const Image = styled.img`
width: 100px;
height: 100px;
border-radius: 50px;
`;
export const PrecoContainer = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
margin-left: 15px;
`;
export const Nome = styled.div`
margin-bottom: 8px;
color: #000;
/* opacity: .7; */
font-weight: bold;
`;
export const Preco = styled.div`
color: ${colors.primary};
`;
export const Separador = styled.div`
width: 90%;
height: 2px;
background-color: #fff;
position: absolute;
bottom: 0px;
align-self: center;
margin-left: 5%;
`;

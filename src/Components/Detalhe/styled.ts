import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
width: 85%;
height: 90%;
align-self: flex-start;
margin: auto;
/* background-color: aliceblue;  */
`
export const DetailContainer = styled.div`
width:300px;
height: 500px;
/* background-color: #ccc; */
`
export const NomeProduto = styled.p`
/* background-color: yellow; */
font-size: 32px;
font-weight: bold;
`

export const EcoContainer = styled.div`
width:300px;
height: 90px;
display: flex;
justify-content: space-between;
flex-direction: column;
`
export const EcoContentContainer = styled.div`
width:300px;
height: 20px;
display: flex;
align-items: center;
`


export const EcoBoldText = styled.p`
/* background-color: yellow; */
text-align: center;
font-size: 14px;
font-weight: bold;
opacity: .7;
margin-right: 7px;
`
export const EcoNormalText = styled.p`
/* background-color: yellow; */
text-align: center;
font-size: 12px;
color: #000;
opacity: .5;
font-weight: bold;
`
export const EntregasText = styled.p`
font-size: 13px;
color: ${colors.primary};
font-weight: bold;
`
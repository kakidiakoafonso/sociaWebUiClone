import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
width: 85%;
height: 90%;
display: flex;
flex-direction: row;
justify-content: space-between;
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
font-size: 15px;
color: ${colors.primary};
font-weight: bold;
`
export const ChoiceContainer = styled.div`
width: 80%;
display: flex;
/* margin: 10px 0px; */
`
export const ChoiceWrapper = styled.div`
width: 50%;
height: 40px;
display: flex;
align-items: center;
color: #000;
font-size: 14px;
font-weight: bold;
`
export const ComboBox = styled.input`
border: 2px solid #ccc;
`


export const ProductContainer = styled.div`
width: 80%;
height: 200px;
background-color: ${colors.grey};
border-radius: 8px;
display: flex;

flex-direction: column;
align-items: center;
justify-content: space-between;
color: #000;
font-size: 14px;
font-weight: bold;
`


export const ProductDetailContainerWrapper = styled.div`
width:90%;
height: 45px;
display: flex;
align-items: center;
/* justify-content: space-between; */
align-self: center;
flex-direction: column;
/* background-color: red; */
`
export const ProductDetailContainer = styled.div`
width:100%;
height: 15px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Quantidade = styled.div`
font-weight: bold;
color: #000;
font-size: 13px;
width: 100%;
margin-left: 10px;
margin-top: 10px;
`
export const OuText = styled.p`
font-weight: bold;
color: #000;
font-size: 13px;
`
export const ImageContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const Image = styled.img`
width: 40%;
height: 60%;
border-radius: 10%;
`
export const ListaCompra = styled.p`
width: 40%;
color: ${colors.primary};
font-weight: bolder;
font-size: 20px;
text-decoration: underline;
margin-top: 20px;
&:hover{
    cursor: pointer;
}
`
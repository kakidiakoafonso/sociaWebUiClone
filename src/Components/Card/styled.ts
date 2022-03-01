import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
width: 23%;
height: 350px;
margin: 10px 0px;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(204, 204, 204, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
transition: 600ms;
&:hover{
    cursor: pointer;
    transform: scale(1.05);
}
`

export const ImageContainer = styled.div`
width: 100%;
height: 70%;
display: flex;
align-items: center;
justify-content: center;
`
export const Image = styled.img`
width: 60%;
height: 60%;
`




export const DetailContainer = styled.div`
width: 100%;
height: 30%;
background-color: ${colors.grey};
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
border-radius: 0px 0px 10px 10px;
/* background-color: red; */
`
export const DetailTop = styled.div`
width: 95%;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
margin-top: 10px;
`
export const Top = styled.div`
width: 100%;
height: 40%;
display: flex;
align-items: center;
flex-direction: row;
`
export const PrecoAntigo = styled.div`
margin-left: 5px;
color:red;
font-weight: bold;
margin-right: 10px;
text-decoration: line-through;
`
export const Preco = styled.div`
color: ${colors.primary};
font-weight: bolder;
`



export const Bottom = styled.div`
width: 100%;
height: 40%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Nome = styled.div`
color: ${colors.grey80};
font-size: 15px;
margin-left: 5px;
`


export const DetailBottom = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const AddBtn = styled.button`
width: 130px;
height: 35px;
background-color: ${colors.white};
color: ${colors.primary};
border-radius: 8px;
border: none;
margin-left:10px;
font-size: 12px;
`
export const BtnQtdContainer = styled.div`
width: 130px;
height: 35px;
background-color: ${colors.white};
color: ${colors.primary};
border-radius: 8px;
border: none;
margin-left:10px;
`
export const SociaBtn = styled(AddBtn)`
width: 90px;
background-color: ${colors.primary};
color: ${colors.white};
margin-right:10px;
`
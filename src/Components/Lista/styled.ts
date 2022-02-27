import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
width: 370px;
height: 280px;
background-color: ${colors.grey};
backdrop-filter: blur(13px);
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(204, 204, 204, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
/* backdrop-filter: blur(5px); */
/* background: transparent; */

display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
`
export const TopContainer = styled.div`
width: 95%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
`
export const Image = styled.img`
width: 60px;
height: 60px;
`
export const ProdutoNome = styled.p`
margin-left: 10px;
`

export const Input = styled.div`
width: 95%;
height: 45px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
background-color: transparent;
border-radius: 8px;
box-shadow: 1px 1px 4px 1px rgba(0,0,0,.3);
&::placeholder
{
    color: red;
}
`
export const SelectContainer = styled.select`
width: 95%;
height: 45px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
background-color: #fff;
border-radius: 8px;
box-shadow: 1px 1px 4px 1px rgba(0,0,0,.3);
`
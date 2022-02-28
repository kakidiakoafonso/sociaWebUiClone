import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
width: 420px;
height: 280px;
background-color:#fefefe;
backdrop-filter: blur(13px);
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(204, 204, 204, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
/* backdrop-filter: blur(5px); */
/* background: transparent; */

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const TopContainer = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
`
export const ImageContainer = styled.div`
width: 64px;
height: 64px;
border-radius: 50%;
border: 3px solid rgba(133, 20, 142,.4);
overflow: hidden;
`
export const Image = styled.img`
width: 60px;
height: 60px;
`
export const ProdutoNome = styled.p`
margin-left: 10px;
`

export const Input = styled.input`
width: 74%;
height: 45px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
background-color: #fff;
opacity: .7;
border-radius: 8px;
box-shadow: 1px 1px 2px 1px rgba(0,0,0,.3);
margin: 15px 0px;
padding: 0px 3%;
border: none;
&::placeholder
{
    color: #222;
}
&:focus
{
    outline: none;
}
`
export const SelectContainer = styled.select`
width: 80%;
padding: 0px 3%;
height: 45px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
background-color: #FEFDFD;
opacity: .7;
border: none;
border-radius: 8px;
box-shadow: 1px 1px 2px 1px rgba(0,0,0,.3);
margin-bottom: 10px;
&:focus{
    outline: none;
}
`
export const Option = styled.option`
/* width: 80%;
height: 45px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
background-color: red;
opacity: .7;
border: none;
border-radius: 8px;
box-shadow: 1px 1px 4px 1px rgba(0,0,0,.3);
&:focus{
    outline: none;
} */
`
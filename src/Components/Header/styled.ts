import  styled  from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
width: 100%;
height: 45px;
background-color: ${colors.grey};
/* display: flexbox;
flex-direction: row;
justify-content: space-between; */
`
export const Content = styled.div`
width: 90%;
height: 45px;
margin: auto;
/* background-color: ${colors.primary}; */
display: flexbox;
flex-direction: row;
justify-content: space-between;
`
export const Wrapper = styled.div`
min-width: 200px;
height: 40px;
/* background-color: ${colors.primary}; */
display: flexbox;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 30px;
`
export const RightWrapper = styled.div`
min-width: 300px;
height: 40px;
/* background-color: ${colors.primary}; */
display: flexbox;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 30px;
`
export const Texto = styled.p`
color: #222;
opacity: .7;
font-size: .8em;
margin: 0px 7px;
`
export const Item = styled.div`
min-width: 150px;
height: 100%;
display: flexbox;
flex-direction: row;
justify-content: space-between;
align-items: center; 
`
export const IconsContainer = styled.div`
width: 120px;
height: 100%;
display: flexbox;
flex-direction: row;
justify-content: space-between;
align-items: center; 
`
export const IconDiv = styled.div`
background-color: #fff;
width: 25px;
height: 25px;
display: flexbox;
justify-content: center;
align-items: center;
border-radius: 15px;
color: #222;
opacity: .7;
`

export const Buttons = styled.button`
display: flexbox;
justify-content: center;
align-items: center;
border-style: none;
font-size: 12px;
`
export const Separador = styled.div`
width: 1px;
height: 50%;
background-color: #222;
opacity: .7;
`
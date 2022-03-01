import styled,{keyframes} from "styled-components";
import { colors } from "../../utils/colors";




export const Container = styled.div`
width: 95%;
height: 30px;
padding-left: 10px;
display: flex;
justify-content: flex-start;
align-items: center;
background-color: ${colors.primary};
`;


export const Nome = styled.div`
margin-bottom: 3px;
color: #fff;
transition: 400ms;
&:hover{
    transform: translate(20px);
}
`;

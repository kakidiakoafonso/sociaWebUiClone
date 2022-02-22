import styled,{keyframes} from "styled-components";
import { colors } from "../../utils/colors";



const transLateAnimation = keyframes`
0%{transform:translateX(0px)}
40%{transform:translateX(20px)}
80%{transform:translateX(40px)}
100%{transform:translateX(50px)}
`
const ShowAnimation = keyframes`
from
{
    transform:translateY(-30px);
    opacity: 0;
}
to
{
    transform:translateY(0px);
    opacity: 1;
}

/* 0%{height:0px; opacity:0;display:none}
40%{height:10px; opacity:0.35;display:flex}
70%{height:20px; opacity:0.70;display:flex}
100%{height:30px; opacity:1;display:flex} */
`
type Icontainer =
{
    delay:number
}
export const Container = styled.div<Icontainer>`
width: 95%;
height: 30px;
padding-left: 10px;
display: flex;
justify-content: flex-start;
align-items: center;
/* transition: 500ms; */
background-color: ${colors.primary};
animation: ${ShowAnimation}  1s ease-in;
animation-delay:${props=> props.delay+"s"};
&:hover{
    /* animation: ${transLateAnimation} 1s linear; */
}
`;


export const Nome = styled.div`
margin-bottom: 3px;
color: #fff;
`;

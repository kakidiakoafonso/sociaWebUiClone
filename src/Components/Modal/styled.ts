import styled ,{keyframes} from "styled-components";
import { colors } from "../../utils/colors";



const scaleAnimation = keyframes`
/* 0%{transform:scale(0)};
20%{transform:scale(.2)};
40%{transform:scale(.4)}; */
0%{transform:scale(.99)};
100%{transform:scale(1)};
`

export const Container = styled.div`
inset: 0;
position: fixed;
background-color: rgba(255,255,255,0.6);
backdrop-filter: blur(5px);
animation: ${scaleAnimation} 100ms ease-in;
&::-webkit-scrollbar{
    background-color: transparent;
    width: 10px;
}
&::-webkit-scrollbar-thumb{
    background-color: ${colors.primary};
    scrollbar-width: 2px;
    border-radius: 4px;
}
`

export const Content = styled.div`
/* background-color: red; */
width: 100%;
height: 100%;
/* position: relative; */

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Icon = styled.div`
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top:0;
right:0;
/* background-color: red; */
`
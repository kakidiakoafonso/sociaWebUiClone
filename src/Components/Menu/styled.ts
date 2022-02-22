import  styled,{keyframes}  from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
height: 140px;
width: 85%;
margin: auto;
margin-top: 20px;
display: flexbox;
flex-direction: row;
justify-content: space-between;
`;
export const LeftContainer = styled.div`
min-width: 15%;
height: 100%;
/* background-color: yellow; */
`;
export const LogoContainer = styled.div`
max-width: 300px;
height: 50%;
/* background-color: red; */
display: flexbox;
align-items: center;
/* justify-content: center; */
& > img {
    width: 100px;
    height: 45px;
}


`;
export const MenuButtonContainer = styled.div`
width: 200px;
height: 30%;
background-color: ${colors.white};
display: flexbox;
align-items: center;
position: relative;
/* justify-content: center; */
`;
export const MenuButton = styled.button`
width: 100%;
height: 50px;
background-color: ${colors.grey};
display: flex;
align-items: center;
justify-content: space-between;
border-style: none;
border-radius: 3px;
color: #000;
font-weight: bold;
opacity: 0.7;
`;

export const CenterContainer = styled.div`
width: 60%;
height: 100%;
/* background-color: red; */
`;
export const MenuListContainer = styled.div`
width: 100%;
height: 40%;
/* background-color: aqua; */
display: flex;
justify-content: space-between;
align-items: center;
`;
export const MenuListItem = styled.div`
/* width: 100px; */
height: 40px;
display: flex;
align-items: center;
justify-content: space-evenly;
transition: .3s;
color: #222;
&:hover{
    color: ${colors.primary};
}
`;
export const LinkText = styled.p`
margin-left: 6px;
`;
export const SearchContainer = styled.div`
/* background-color: yellowgreen; */
width: 100%;
height: 60%;
display: flexbox;
justify-content: center;
align-items: center;
position: relative;
`;
export const SearchWrapper = styled.div`
/* background-color: yellow; */
width: 100%;
height: 50px;
border: 2px ${colors.grey} solid;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;

`;
export const Input = styled.input`
/* background-color: yellow; */
width: 80%;
height: 40px;
color: ${colors.grey};
border: none;
font-size: 16px;
margin-left: 20px;
:focus{
    border-style: none;
}
`;
















export const RightContainer = styled.div`
min-width: 15%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
/* background-color: beige;  */
`;
export const RightTopContainer = styled.div`
display: flex;
align-items: center;
/* background-color: pink; */
margin-top: 10px;
display: flex;
justify-content: end;
`;
export const TextTotal = styled.p`
margin-left: 10px;
color: #222;
font-size: 14px;
opacity: .8;
font-weight: bold;
`;

export const RightBottomContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
/* background-color: pink; */
height: 60px;
margin-bottom: 20px;
`;
export const IconPhone = styled.div`
display: flex;
align-items: center;
justify-content: center;
align-items: center;
height: 40px;
width: 40px;
border-radius: 25px;
background-color: ${colors.grey};
color: ${colors.primary};
`;
export const RightBottomRight = styled.div`
/* background-color: red; */
/* width: 120px; */
display: flex;
flex-direction: column;
`;
export const TextTelefone = styled.div`
color: #000;
font-weight: 600;
opacity: .4;
font-size:14px;
align-self: flex-end;
`;
export const TextSuporte = styled.div`
color: #222;
font-size:12px;
align-self: flex-end;

`;

type ISearchResult = {
    display:'none'|'block'
}

const SearchResultAnimation = keyframes`
    0% {transform:scale(0)}
    30% {transform:scale(0.3)}
    60% {transform:scale(0.6)}
    100% {transform:scale(1)}
`;
export const SearchResult = styled.div<ISearchResult>`
display: ${props=>props.display};
flex-direction: column;
width: 100%;
height: 400px;
background-color: ${colors.grey};
border-radius: 10px;
position: absolute;
top: 75px;
overflow-x: hidden;
overflow-y: scroll;
transition: 2s animation;
animation: ${SearchResultAnimation} 500ms linear;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
&::-webkit-scrollbar{
    background-color: transparent;
}
&::-webkit-scrollbar-thumb{
    background-color: ${colors.primary};
    scrollbar-width: 2px;
    border-radius: 4px;
}

`;


type IMenu = {
    display:'none'|'block'
}
export const MenuItemContainer =styled.div<IMenu>`
display: ${props=>props.display};
position: absolute;
top: 57px;
width: 100%;
height: 400px;
/* background-color: ${colors.primary}; */
`;
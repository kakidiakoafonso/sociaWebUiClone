import styled from "styled-components";

export const Container = styled.div`
width: 400px;
height: 400px;
background-color: #ffff;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(204, 204, 204, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
/* backdrop-filter: blur(5px); */
/* background: transparent; */

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const Logo = styled.img`
width: 80px;
height: 50px;
margin-bottom: 20px;
`
export const Reset = styled.button`
width: 80%;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
color: #a6a6a6;
font-weight: bold;
border: none;
background: transparent;
&:hover{
    cursor: pointer;
}
`
export const Separator = styled.div`
width: 400px;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 14px;
color: #000;
font-weight: bold;
border: none;
background: transparent;
`
export const Row = styled.div`
width: 40%;
height: 1px;
background-color: #ccc;
`







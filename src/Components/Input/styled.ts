import styled from "styled-components";

export const Container = styled.div`
width: 80%;
height: 45px;
border: none;
box-shadow: 0 4px 18px 0 rgba(204, 204, 204, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 5px;
display: flex;
align-items: center;
margin: 5px 0;
`
export const Input = styled.input`
width: 80%;
height: 30px;
border: none;
margin-left: 10px;
background: transparent;
&:focus{
    border-style: none;
    border-color: red;
}
`
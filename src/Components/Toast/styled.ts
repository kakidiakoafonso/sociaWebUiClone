import styled ,{keyframes,css}from "styled-components";


const fadeAnimation = keyframes`
0%{
    transform:translateX(400px);
    height: 30px;
}
20%{
    transform:translateX(300px);
    }
40%{
    transform:translateX(200px);
    }
60%{
    transform:translateX(100px);
    height: 90px;
    }
80%{
    transform:translateX(50px);
    }
90%{
    transform:translateX(20px);
    }
100%{
    transform:translateX(0px);
    height: 150px;
    }
`
const fadeOutAnimation = keyframes`
0%{
    transform:translateX(0px);
    height: 150px;
}
20%{
    transform:translateX(20px);
    }
40%{
    transform:translateX(50px);
    }
60%{
    transform:translateX(100px);
    height: 90px;
    }
80%{
    transform:translateX(200px);
    }
90%{
    transform:translateX(300px);
    }
100%{
    transform:translateX(400px);
    height: 150px;
    }
`
type Props = {
    animationType: "fadeIn"|"fadeOut"
}
export const Container = styled.div`
width: 350px;
height:150px;
background-color: red;
border-radius: 10px;
`
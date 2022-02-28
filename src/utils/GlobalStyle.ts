import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
 
const GlobalStyle = createGlobalStyle`
  body {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    background: ${colors.white};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    &::-webkit-scrollbar{
    background-color: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${colors.primary};
        scrollbar-width: 2px;
        border-radius: 4px;
    }
  }
`;
 
export default GlobalStyle;
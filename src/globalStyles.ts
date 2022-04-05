import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
box-sizing: border-box;
*, *::before, *::after {
    box-sizing: inherit;}
    
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
 body {
    font-family: 'Poppins', sans-serif;
    
 }
`

export default GlobalStyle;
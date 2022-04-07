import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

.container
 {
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
 .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
   .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
   .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
   .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
   .container {
    max-width: 1280px;
  }
}


*, *::before, *::after {
    box-sizing: border-box;}

    
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
 body {
  font-family: 'Poppins', sans-serif;
  /* padding-left: 80px ;
  padding-right: 80px; */
  
  margin: 0 auto;
 }

`;

export default GlobalStyle;

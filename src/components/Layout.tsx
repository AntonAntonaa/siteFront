import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../components/Header ";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWraper>
        <Header />
        <Outlet />
        <Footer />
      </StyledWraper>
    </>
  );
};

const StyledWraper = styled.div`

`;

export default Layout;

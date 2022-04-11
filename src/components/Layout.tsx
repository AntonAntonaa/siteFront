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
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </StyledWraper>
    </>
  );
};

const StyledWraper = styled.div`
  .header {
    margin-top: 24px;
  }
`;

export default Layout;

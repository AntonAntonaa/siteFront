import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../components/Header ";
import styled from "styled-components";

const Layout = () => {
  const navBarItems = ["book1", "book2"];
  return (
    <>
      <StyledWraper>
        <Header />
        <Outlet />
        <Footer />
      </StyledWraper>
    </>
  );
};

const StyledWraper = styled.div`
  width: 1200;
  margin: 0 auto;
  
  
`

export default Layout;

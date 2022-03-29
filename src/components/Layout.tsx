import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../components/Header ";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const Layout = () => {
  const navBarItems = ["book1", "book2"];
  return (
    <>
      <Container>
        <Head>
        <header>
          <NavLink to="/">Home-</NavLink>
          <NavLink to="/profile">Profile-</NavLink>
          <NavLink to="/product">Product</NavLink>
        </header>
          <Header />
        </Head>
        <Nav>
          <NavBar navBarItems={navBarItems} />
        </Nav>
        <Cont>
          <Outlet />
        </Cont>
        <Foot>
          <Footer />
        </Foot>
        <Footer />
      </Container>
    </>
  );
};

const Head = styled.header`
  background: black;
  grid-area: Head;
  padding: 5px;
`;

const Nav = styled.div`
  background: #9aaab7;
  grid-area: Nav;
  padding: 5px; ;
`;

const Cont = styled.div`
  background: #1f2128;
  color: white;
  grid-area: Cont;
  padding: 5px;
`;

const Foot = styled.div`
  background: #ff9637;
  grid-area: Foot;
`;

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
  grid-template-rows: 1fr 10fr 1px;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    "Head Head"
    "Nav Cont"
    "Foot Foot";
  grid-gap: 5px;
`;

export default Layout;

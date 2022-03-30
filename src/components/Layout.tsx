import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../components/Header ";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const Layout = () => {
  const navBarItems = ["book1", "book2"];
  return (
    <>
      <StyledWraper>
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <aside className="navBar">
            <NavBar navBarItems={navBarItems} />
          </aside>
          <article className="content">
            <Outlet />
          </article>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </StyledWraper>
    </>
  );
};

const StyledWraper = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    flex: 0 0 150px;
    background-color: aqua;
  }
  .main {
    display: flex;
    flex-direction: row;
    flex: 1 1 100%;
    min-height: calc(100vh - 150px - 70px);
    
  }
  .navBar {
    flex: 0 0 20%;
    background-color: yellow;
    
  }
  .content {
    flex: 0 0 80%;
    background-color: gray;
  }
  .footer {
    flex: 0 0 70px;
    background-color: orange;
  }
`;

export default Layout;

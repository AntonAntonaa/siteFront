import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Bar = () => {
  return (
    <StyledWraper>
      <main className="link">
        <div className="home">
          <NavLink to="/">Home Page </NavLink>
        </div>
        <div className="catalog">
          <NavLink to="/product">Catalog </NavLink>
        </div>
        <div className="profile">
          <NavLink to="/profile">My Account </NavLink>
        </div>
        <div className="cart">
          <NavLink to="/cart">Cart </NavLink>
        </div>

        {/* <NavLink to="/registration">Registration</NavLink> */}
      </main>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  color: #f0f4ef;
  display: flex;
  flex-direction: column;
  .home {
    width: 117px;
    height: 30px;
  }
  .catalog {
    width: 82px;
    height: 30px;
    margin-top: 5px;
  }
  .profile {
    width: 119px;
    height: 30px;
    margin-top: 5px;
  }
  .cart {
    width: 45px;
    height: 30px;
    margin-top: 5px;
  }
`;

export default Bar;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Bar = () => {
  return (
    <StyledWraper>
      <main className="link">
        <NavLink to="/">Home-</NavLink>
        <NavLink to="/profile">Profile-</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/registration">Registration</NavLink>
      </main>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: aqua;
  .header {
    text-align: center;
    cursor: pointer;
  }
`;

export default Bar;

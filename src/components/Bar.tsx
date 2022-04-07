import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Bar = () => {
  return (
    <StyledWraper>
      <main >
       
          <NavLink to="/">Home Page </NavLink>
       
     
          <NavLink to="/product">Catalog </NavLink>
     
     
          <NavLink to="/profile">My Account </NavLink>
 
 
          <NavLink to="/cart">Cart </NavLink>
    

        {/* <NavLink to="/registration">Registration</NavLink> */}
      </main>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  color: #f0f4ef;
  display: flex;
  flex-direction: column;

  a{
    display: block;
    color: #f0f4ef;
    margin-bottom: 5px;
  }


`;

export default Bar;

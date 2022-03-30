import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <StyledWraper>
      <h1 className="header__title">Knigga</h1>
      <div className="link">
        <NavLink to="/">Home-</NavLink>
        <NavLink to="/profile">Profile-</NavLink>
        <NavLink to="/product">Product</NavLink>
      </div>
      <FontAwesomeIcon icon={faHome} className="header__icon" />
    </StyledWraper>
  );
};
const StyledWraper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: aqua;
  .header {
    &__title {
      text-align: center;
      cursor: pointer;
    }
    &__icon {
      cursor: pointer;
      margin-right: 5px;
      margin-top: 5px;
      color: black;
      width: 30px;
      height: 50px;
    }
  }
  .link {
  }
`;

export default Header;

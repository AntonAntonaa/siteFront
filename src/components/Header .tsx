import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Bar from './Bar';

const Header = () => {
  return (
    <StyledWraper>
      <h1 className="header">Knigga</h1>
      <Bar />
      {/* <FontAwesomeIcon icon={faHome} className="header__icon" /> */}
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

export default Header;

// {
//   cursor: pointer;
//   margin-right: 5px;
//   margin-top: 5px;
//   color: black;
//   width: 30px;
//   height: 50px;
// }

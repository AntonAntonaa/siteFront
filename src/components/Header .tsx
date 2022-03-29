import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <StyledWraper>
      <Head>Kniga</Head>
      <Icon>
        <FontAwesomeIcon icon={faHome} />
      </Icon>
    </StyledWraper>
  );
};

const StyledWraper = styled.div``;

const Head = styled.header`
  text-align: center;
  cursor: pointer;
`;

const Icon = styled.div`
  cursor: pointer;
  margin-right: 5px;
  margin-top: 5px;
  color: white;
  width: 30px;
  height: 50px;
`;

export default Header;

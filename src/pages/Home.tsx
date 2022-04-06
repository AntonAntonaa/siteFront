import styled from "styled-components";
import Baner from "../components/banner";

const Home = () => {
  return (
    <StyledWraper>
      <div className="baner">
        <Baner />
      </div>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  flex-grow: 1;
  display: flex;
`;

export default Home;

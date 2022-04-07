import styled from "styled-components";
import Baner from "../components/banner";

const Home = () => {
  return (
    <StyledWraper>
      <div className="baner">
        <Baner  />
      </div>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  flex-grow: 1;
  display: flex;

  .baner {
    margin-top: 40px;
    margin-bottom: 110px;
  }
`;

export default Home;

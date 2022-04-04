import styled from "styled-components";

const Home = () => {
  return (
    <StyledWraper>
      <h1>Home</h1>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  flex-grow: 1;
  display: flex;`;

export default Home;

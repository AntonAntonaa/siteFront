import React from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <StyledWraper>
      <h1>Content</h1>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  color: black;
`;

export default Content;

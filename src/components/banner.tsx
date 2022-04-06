import React from "react";
import styled from "styled-components";
import { ReactComponent as Baba } from "../assets/baba.svg";
import { ReactComponent as Book } from "../assets/book.svg";

const Baner = () => {
  return (
    <StyledWraper>
      <div className="colum">
        <div className="header">Build your library with us</div>
        <div className="bay">Buy two books and get one for free</div>
        <button className="button">Choose a book</button>
      </div>
      {/* <Book className="book" /> */}
      <Baba className="baba" />
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
display: flex;
flex-direction: row;
padding-top: 40px;
padding-bottom: 110px;
height: 400px;
background-color: #F0F4EF;

.baba {
  height: 494px;
  height: 547px;
  margin-left: 102px;
}
`;

export default Baner;

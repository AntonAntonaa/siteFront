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
      <Book className="book" />
      <Baba className="baba" />
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 1280px;
  background-color: #f0f4ef;
  margin: auto;
  position: relative;

  .colum {
    display: flex;
    flex-direction: column;
    padding-left: 108px;
    padding-top: 80px;
    z-index: 2;
  }
  .header {
    width: 522px;
    height: 60px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .bay {
    width: 217px;
    height: 60px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-top: 10px;
  }

  .button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    width: 230px;
    height: 44px;
    background: #344966;
    border-radius: 16px;
    margin-top: 50px;
    color: #f0f4ef;
  }

  .book {
    position: absolute;
    margin-top: 135px;
    z-index: 1;
  }

  .baba {
    position: absolute;
    bottom: 0px;
    right: 54px;
    width: 406px;
   height: 400px;
    margin-left: 102px;
  }
`;

export default Baner;

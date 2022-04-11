import styled from "styled-components";
import { ReactComponent as MyLogo } from "../assets/logo.svg";
import { ReactComponent as Vector } from "../assets/Vector.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

// const edit = useSelector ()
// const [value, setValue] = useState(edit.text);

const Header = () => {
  return (
    <StyledWraper>
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo">
            <MyLogo className="logobook" />
          </Link>
        </div>
        <div className="catalog">Catalog</div>
        <div className="search">
          <Vector className="vector" />
          <input type="text" className="input" placeholder="Search" />
        </div>
        <button className="button button-primary button_log">Log In/ Sing Up</button>
      </div>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    flex: 0 0 64px;
    width: 100%;
    justify-content: space-between;
    margin: auto;
    z-index: 3;
  }

  .logo .logobook {
    height: 46px;
    width: 88px;
    cursor: pointer;
  }

  .catalog {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 128px;
    font-size: 24px;
  }

  .vector {
    margin: auto;
    width: 64px;
  }

  .search {
    display: flex;
    height: 64px;
    background-color: #f0f4ef;
    border-radius: 16px;
    cursor: pointer;
    margin-left: 43px;
  }

  .input {
    background-color: transparent;
    width: 566px;
    border: 0px;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
    color: #0d1821;
  }

  .button_log {

    margin-left: 98px;
    margin-right: 0px;
  }
`;

export default Header;

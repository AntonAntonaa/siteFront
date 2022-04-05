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
      <button className="button_log">Log In/ Sing Up</button>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 64px;
  width: 100%;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 40px;
  margin: auto;

  .logo .logobook {
    height: 46px;
    width: 88px;
  }

  .catalog {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .vector {
  }

  .search {
    display: flex;
    height: 64px;
    background-color: #f0f4ef;
    border-radius: 16px;
  }

  .input {
    background-color: transparent;
    border: 1px solid;
  }
  
  .button_log {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    background: #344966;
    border-radius: 16px;
    font-size: 16px;
    line-height: 24px;
    width: 230px;
    height: 44px;
    color:#F0F4EF;
  }
`;

export default Header;

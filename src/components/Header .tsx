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
          <MyLogo />
        </Link>
      </div>
      <div className="catalog">Catalog</div>
      <div className="search">
        <div className="vector">
          <Vector />
        </div>
        <input type="text" className="input" placeholder="Search"></input>
      </div>
      <button className="button_log">Log In/ Sing Up</button>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 64px;
  width: 1280;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  margin: auto;

  .logo {
    display: flex;
    height: 46px;
  }

  .catalog {
    display: flex;
    flex-wrap: wrap;
    font-family: "Poppins";
  }

  .vector {
    background: #f0f4ef;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .search {
    display: flex;
    height: 64px;
    width: 630px;
  }

  .input {
    background: #f0f4ef;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border: 0px;
  }
  .button_log {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    background: #344966;
    border-radius: 16px;
  }
`;

export default Header;

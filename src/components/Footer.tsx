import React from "react";
import styled from "styled-components";
import { ReactComponent as MyLogoFoot } from "../assets/logofooter.svg";
import { Link } from "react-router-dom";
import Bar from "./Bar";
import { ReactComponent as Map } from "../assets/map.svg";

const Footer = () => {
  return (
    <StyledWraper>
      <div className="colum">
        <div className="colum_1">
          <Link to="/" className="logo">
            <MyLogoFoot className="logobook" />
          </Link>
          <div className="email">tranthuy.nute@gmail.com</div>
          <div className="phone">(480) 555-0103</div>
        </div>
        <div className="colum_2">
          <Bar />
        </div>
        <div className="colum_3">
          <div className="nato">6391 Elgin St. Celina, Delaware 10299</div>
          <Map className="map" />
        </div>
      </div>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 340px;
  background-color: #0d1821;
  height: 340px;
  margin-top: 150px;

  .colum {
    display: flex;
    flex-direction: row;
    margin-top: 73px;
  }

  .colum_1 {
    margin-left: 0px;
  }

  .logobook {
    height: 46px;
    width: 88px;
    cursor: pointer;
  }

  .email {
    color: #f0f4ef;
    margin-top: 40px;
    width: 267px;
    height: 30px;
  }

  .phone {
    color: #f0f4ef;
    width: 158px;
    height: 30px;
    margin-top: 5px;
  }

  .colum_2 {
    margin-left: 166px;
  }
  .colum_3 {
    margin-left: 315px;
  }

  .nato {
    color: #f0f4ef;
    width: 364px;
    height: 30px;
  }

  .logo {
    height: 413px;
    width: 160px;
    cursor: pointer;
  }
`;

export default Footer;

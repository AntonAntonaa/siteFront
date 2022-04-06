import { type } from "os";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hoc/UseAuth";
import { ReactComponent as Human } from "../assets/human_1.svg";

type LocationState = {
  from: {
    pathname: string;
  };
};
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();

  const locationState = location.state as LocationState;
  const fromPage = locationState?.from?.pathname || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    const dob = Number(formData.get("dob"));

    if (typeof username != "string") {
      return;
    }
    console.log(username);
    if (typeof password != "string") {
      return;
    }
    console.log(password);
    if (typeof email != "string") {
      return;
    }
    console.log(email);
    console.log(typeof dob);
    if (typeof dob != "number") {
      return;
    }
    console.log(dob);

    register(username, password, email, dob);
    navigate(fromPage, { replace: true });
  };

  return (
    <StyledWraper>
      <div className="colum">
        <div className="login">
          <h1 className="header">Sign Up</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="email">
            <div className="envelope"></div>
            <label>
              <input className="login" type="text" />
            </label>
          </div>

          <div className="enter your email">Enter your email</div>

          <div className="password">
            <div className="sauron"></div>
            <label>
              <input className="passwrord" type="password" />
            </label>
          </div>

          <div className="Enter your password">Enter your password</div>

          <div className="password">
            <div className="sauron"></div>
            <label>
              <input className="passwrord" type="password" />
            </label>
          </div>
          <div className="Enter your password">
            Repeat your password without errors
          </div>

          <button type="submit" className="button_log">
          Sing Up
          </button>
        </form>
      </div>
      <Human className="human" />
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
display: flex;
  flex-direction: row;
  padding-top: 80px;
  padding-bottom: 80px;

  

`;

export default Register;

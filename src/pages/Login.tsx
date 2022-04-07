import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hoc/UseAuth";
import { ReactComponent as Human } from "../assets/human_1.svg";
import { ReactComponent as Mail } from "../assets/Mail.svg";
import { ReactComponent as Hide } from "../assets/Hide.svg";

type LocationState = {
  from: {
    pathname: string;
  };
};

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const locationState = location.state as LocationState;
  const fromPage = locationState?.from?.pathname || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    signin(email, password);
    navigate(fromPage, { replace: true });

    if (login.email == login.email && login.password == login.password) {
      console.log("da");
    } else {
      console.log("net");
    }
  };
  //{fromPage}
  return (
    <StyledWraper>
      <div className="colum">
        <h1 className="login">Log In </h1>

        <form onSubmit={handleSubmit}>
          <div className="email">
            <Mail className="mail" />
            <label>
              <input
                className="input1"
                type="text"
                placeholder="Email"
                onChange={(event) =>
                  setLogin({ ...login, email: event.target.value })
                }
                value={login.email}
              />
            </label>
          </div>

          <div className="string1">Enter your email</div>

          <div className="password">
            <Hide className="sauron" />
            <label>
              <input
                className="input2"
                type="password"
                onChange={(event) =>
                  setLogin({ ...login, password: event.target.value })
                }
                value={login.password}
              />
            </label>
          </div>

          <div className="string2">Enter your password</div>

          <button type="submit" className="button_log">
            Login
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
  margin-top: 90px;
  margin-bottom: 80px;
  height: 522px;
  width: 1280px;

  .colum {
    padding-left: 80px;
  }

  .login {
    
    color: #0d1821;
    font-size: 40px;
    line-height: 60px;
    font-weight: 700;
  }

  .email {
    display: flex;
    height: 64px;
    background-color: #f0f4ef;
    border-radius: 16px;
    cursor: pointer;
    margin-top: 60px;
  }

  .mail {
    margin: auto;
    width: 64px;
  }

  .input1 {
    background-color: transparent;
    width: 349px;
    height: 64px;
    border: 0px;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
    color: #0d1821;
  }

  .string1 {
    width: 126px;
    height: 24px;
    margin-top: 10px;
    color: #344966;
  }

  .password {
    display: flex;
    height: 64px;
    background-color: #f0f4ef;
    border-radius: 16px;
    cursor: pointer;
    margin-top: 30px;
  }

  .sauron {
    margin: auto;
    width: 64px;
  }

  .input2 {
    background-color: transparent;
    width: 349px;
    height: 64px;
    border: 0px;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
    color: #0d1821;
  }

  .string2 {
    width: 158px;
    height: 24px;
    margin-top: 10px;
    color: #344966;
  }

  .button_log {
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    width: 151px;
    height: 44px;
    background: #344966;
    border-radius: 16px;
    color: #f0f4ef;
  }

  .human {
    padding-left: 146px;
    width: 612px;
    height: 522px;
  }
`;

export default Login;

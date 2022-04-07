import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hoc/UseAuth";
import { ReactComponent as Human } from "../assets/human_1.svg";
import { ReactComponent as Map } from "../assets/map.svg";

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

  return (
    <StyledWraper>
      <div className="colum">
        <div className="login">
          <h1 className="header">Log In {fromPage}</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="email">
            <div className="envelope"></div>
            <label>
              <input
                className="email"
                type="text"
                onChange={(event) =>
                  setLogin({ ...login, email: event.target.value })
                }
                value={login.email}
              />
            </label>
          </div>

          <div className="enter your email">Enter your email</div>

          <div className="password">
            <div className="sauron"></div>
            <label>
              <input
                className="passwrord"
                type="password"
                onChange={(event) =>
                  setLogin({ ...login, password: event.target.value })
                }
                value={login.password}
              />
            </label>
          </div>

          <div className="Enter your password">Enter your password</div>

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
  padding-top: 80px;
  padding-bottom: 80px;

  .colum {
    padding-left: 80px;
  }

  .login {
  }
  .header {
    width: 70px;
  }
  .human {
    padding-left: 146px;
    width: 612px;
    height: 522px;
  }

  .buuton_log {
    /* justify-content: center;
    align-items: center;
    padding: 10px 50px;
    width: 151px;
    height: 44px;

    background: #344966;
    border-radius: 16px;

    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #f0f4ef; */
  }
`;

export default Login;

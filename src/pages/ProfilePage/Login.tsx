import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hoc/UseAuth";

type LocationState = {
  from: {
    pathname: string;
  };
};
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const locationState = location.state as LocationState;
  const fromPage = locationState?.from?.pathname || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    signin(username);
    navigate(fromPage, { replace: true });
  };

  return (
    <div>
      <p>Login {fromPage}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

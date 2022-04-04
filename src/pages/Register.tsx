import { type } from "os";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hoc/UseAuth";

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
    <div>
      <p>Login {fromPage}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" required />
        </label>
        <label>
          Email: <input name="email" type="text" required />
        </label>
        <label>
          DOB: <input name="dob" type="number" required />
        </label>
        <label>
          Password: <input name="password" type="password" required />
        </label>
        <button type="submit">Regi</button>
      </form>
    </div>
  );
};

export default Register;

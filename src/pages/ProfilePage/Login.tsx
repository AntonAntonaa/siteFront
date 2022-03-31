import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hoc/UseAuth";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation ()
    const auth = useAuth();
    
    const fromPage = location.state?.from?.pathname || "/";


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string;

        auth.signin(username, () =>{
            navigate(fromPage, { replace: true })
        })


    }

    return(
        <div>
        <p>You must log in to view the page at {fromPage}</p>
  
        <form onSubmit={handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </div>
    );
    
};

export default Login;


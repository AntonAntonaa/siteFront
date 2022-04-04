import React from "react";
import { useDispatch } from "react-redux";
import { Login } from "../services/user.bk";

import { AuthContext } from "./UseAuth";
import { setTokenRedux } from './../store/action';
import { Register } from "../services/user.bk";


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

const register = (userName: string, password: string, email: string, dob: number) => {
  Register (userName, password, email, dob).then(res => {
    dispatch(setTokenRedux(res.token))
  }) 
}



  const signin = (userName:string, password:string) => {
    Login(userName, password).then(res => {
      dispatch(setTokenRedux(res.token))
    });
  };

  const signout = () => {
    dispatch(setTokenRedux(null));
  };

  const value = {  signin, signout, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

import { createContext, useState } from "react";
import React from "react";
import AuthContextType from "../Type/AuthContextType";
import { AuthContext } from "./UseAuth";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<any>(null);

  const signin = (newUser: string) => {
    setUser(newUser);
  };

  const signout = () => {
    setUser(null);
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

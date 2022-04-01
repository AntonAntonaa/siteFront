import { createContext, useState } from "react";
import React from "react";
import AuthContextType from "../Type/user";
import { AuthContext } from "./UseAuth";


// const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<any>(null);

  const signin = (newUser: string) => {
    setUser(newUser)
    // callback()
      
    };
  
  const signout = () => {
    setUser(null)
    // callback()
    };


  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

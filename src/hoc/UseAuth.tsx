import AuthContextType from "../Type/user";
import React from "react";

const AuthContext = React.createContext<AuthContextType>(null!);

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;

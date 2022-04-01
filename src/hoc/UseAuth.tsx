import React from "react";

import AuthContextType from "../Type/user";

export const AuthContext = React.createContext<AuthContextType>({
  signin: () => {},
  signout: () => {},
  user: null
});

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;

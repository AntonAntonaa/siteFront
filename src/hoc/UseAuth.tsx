import React from "react";

import AuthContextType from "../Type/AuthContextType";

export const AuthContext = React.createContext<AuthContextType>({
  signin: () => {},
  signout: () => {},
  register: () => {}
});

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;

import React, { Children } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "./UseAuth";

const RequireAuth: React.FC = ({ children }) => {
  const location = useLocation();
  const {user} = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default RequireAuth;

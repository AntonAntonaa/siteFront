import React, { Children } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getUserToken } from "../store/selector";

const RequireAuth: React.FC = ({ children }) => {
  const location = useLocation();
  const userToken = useSelector(getUserToken);

  if (!userToken) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default RequireAuth;

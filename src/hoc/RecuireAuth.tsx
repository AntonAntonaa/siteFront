import React, { Children } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getUserToken } from "../store/selector";

const RequireAuth: React.FC = ({ children }) => {
  const location = useLocation() as any;
  const userToken = useSelector(getUserToken);
console.log('LOCATIOMN', {location, userToken})
  if (!userToken) {
    return <Navigate to="/login" state={{ from: location }} replace/>;
  }

  return <>{children}</>;
};

export default RequireAuth;

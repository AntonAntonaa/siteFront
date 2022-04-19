import React, { Children } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../store/store";

const RequireAuth: React.FC = ({ children }) => {
  const location = useLocation() as any;
  const user = useAppSelector((state) => state.user.user);

  console.log("LOCATIOMN", { location, user });
  if (!user?.email)
 {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log(user)

  return <>{children}</>;
};

export default RequireAuth;

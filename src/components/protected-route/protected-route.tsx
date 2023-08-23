import { Navigate, useLocation } from "react-router-dom";
import { FC, ReactElement } from "react";
import { getCookie } from "../../utils/cookie";

export const ProtectedRoute: FC<{
  element: ReactElement;
  onlyUnAuth?: boolean;
}> = ({ element, onlyUnAuth = false }) => {
  const isLoggedIn =
    getCookie("accessToken") && getCookie("accessToken") !== "";
  const location = useLocation();
  const from = location.state?.from || "/";
  if (onlyUnAuth && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return element;
};

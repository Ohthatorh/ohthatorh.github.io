import { Navigate, useLocation } from "react-router-dom";
import { FC, ReactElement } from "react";
import { useAppSelector } from "../../services/hooks/hooks";

export const ProtectedRoute: FC<{
  element: ReactElement;
  path?: string;
  onlyUnAuth?: boolean;
}> = ({ element, onlyUnAuth = false }) => {
  const isLoggedIn = useAppSelector((store) => store.user.user.name);
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

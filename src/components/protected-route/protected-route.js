import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ element, onlyUnAuth = false }) {
  const isLoggedIn = useSelector((store) => store.user.user.name);
  const location = useLocation();
  const from = location.state?.from || "/";
  if (onlyUnAuth && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return element;
}

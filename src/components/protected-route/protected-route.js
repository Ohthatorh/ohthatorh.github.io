import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ element }) => {
  const user = useSelector((state) => state.user.user);
  return user.name ? element : <Navigate to="/login" replace />;
};

export const ProtectedRouteAuth = ({ element }) => {
  const user = useSelector((state) => state.user.user);
  return user.name ? <Navigate to="/" replace /> : element;
};

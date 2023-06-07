import {
  ForgotPasswordPage,
  HomePage,
  IngredientPage,
  LoginPage,
  NotFoundPage,
  OrdersPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage,
} from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ProtectedRoute,
  ProtectedRouteAuth,
} from "../protected-route/protected-route";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../services/actions/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<ProtectedRouteAuth element={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<ProtectedRouteAuth element={<RegisterPage />} />}
        />
        <Route
          path="/forgot-password"
          element={<ProtectedRouteAuth element={<ForgotPasswordPage />} />}
        />
        <Route
          path="/reset-password"
          element={<ProtectedRouteAuth element={<ResetPasswordPage />} />}
        />
        <Route path="/ingredients/:ingredientId" element={<IngredientPage />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<ProfilePage />} />}
        />
        <Route
          path="/profile/orders"
          element={<ProtectedRoute element={<OrdersPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

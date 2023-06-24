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
} from "../../pages/index";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  ProtectedRoute,
  ProtectedRouteAuth,
} from "../protected-route/protected-route";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../services/actions/user";
import AppHeader from "../app-header/app-header";
import { getListIngredients } from "../../services/actions/ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { REMOVE_CURRENT_INGREDIENT } from "../../services/actions/currentIngredient";
import Modal from "../modal/modal";

const ModalSwitch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const background = location.state && location.state.background;
  const handleModalClose = () => {
    dispatch({
      type: REMOVE_CURRENT_INGREDIENT,
    });
    navigate(-1);
  };
  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<ProtectedRoute onlyUnAuth={true} element={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute onlyUnAuth={true} element={<RegisterPage />} />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRoute
              onlyUnAuth={true}
              element={<ForgotPasswordPage />}
            />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRoute onlyUnAuth={true} element={<ResetPasswordPage />} />
          }
        />
        <Route path="/ingredients/:ingredientId" element={<IngredientPage />} />
        <Route
          path="/profile"
          element={<ProtectedRoute path="/profile" element={<ProfilePage />} />}
        />
        <Route
          path="/profile/orders"
          element={<ProtectedRoute element={<OrdersPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal text="Детали ингредиента" onClose={handleModalClose}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListIngredients());
    dispatch(getUserInfo());
  }, []);
  return (
    <BrowserRouter>
      <ModalSwitch />
    </BrowserRouter>
  );
}

export default App;

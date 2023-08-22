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
  FeedPage,
  OrderPage,
} from "../../pages/index";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ProtectedRoute } from "../protected-route/protected-route";
import { FC, useEffect } from "react";
import { getUserInfo } from "../../services/actions/user";
import AppHeader from "../app-header/app-header";
import { getListIngredients } from "../../services/actions/ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import OrderDetail from "../order-detail/order-detail";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { Preloader } from "../preloader/preloader";

const ModalSwitch: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const handleModalClose = () => {
    navigate(-1);
  };
  console.log(location);
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
        <Route path="/feed/" element={<FeedPage />} />
        <Route
          path="/feed/:orderId"
          element={<OrderPage pathname={"/feed"} />}
        />
        <Route
          path="/profile/orders/:orderId"
          element={
            <ProtectedRoute
              element={<OrderPage pathname={"/profile/orders"} />}
            />
          }
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
          <Route
            path="/feed/:orderId"
            element={
              <Modal text="" onClose={handleModalClose}>
                <OrderDetail pathname={background.pathname} />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:orderId"
            element={
              <Modal text="" onClose={handleModalClose}>
                <OrderDetail pathname={background.pathname} />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

function App() {
  const ingredients = useAppSelector((store) => store.ingredients.items);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getListIngredients());
    dispatch(getUserInfo());
  }, [dispatch]);
  return !ingredients.length ? (
    <Preloader />
  ) : (
    <BrowserRouter>
      <ModalSwitch />
    </BrowserRouter>
  );
}

export default App;

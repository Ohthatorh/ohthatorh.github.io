import classNames from "classnames";
import styles from "./orders-page.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services/actions/auth";
import { FC, useEffect } from "react";
import OrdersList from "../../components/orders-list/orders-list";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_START,
} from "../../services/actions/wsActions";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";

export const OrdersPage: FC = () => {
  const orders = useAppSelector((store) => store.user.orders);
  const mainClassNames = classNames(`${styles.main} container`);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogoutClick = () => {
    dispatch(logout());
    navigate("/");
  };
  useEffect(() => {
    dispatch({ type: WS_USER_CONNECTION_START });
    dispatch({ type: WS_CONNECTION_START });
    return () => {
      dispatch({ type: WS_USER_CONNECTION_CLOSED });
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);
  return (
    <main className={mainClassNames}>
      <div className={styles.tabs}>
        <Link to={{ pathname: "/profile" }}>
          <Tab value="profile" active={false} onClick={() => null}>
            Профиль
          </Tab>
        </Link>
        <Tab value="history" active={true} onClick={() => null}>
          История заказов
        </Tab>
        <Tab value="logout" onClick={handleLogoutClick} active={false}>
          Выход
        </Tab>
      </div>
      <OrdersList orders={orders} />
    </main>
  );
};

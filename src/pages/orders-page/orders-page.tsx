import classNames from "classnames";
import styles from "./orders-page.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../services/actions/auth";
import { FC } from "react";

export const OrdersPage: FC = () => {
  const mainClassNames = classNames(`${styles.main} container`);
  const navigate = useNavigate();
  const dispatch = useDispatch() as any;
  const handleLogoutClick = () => {
    dispatch(logout());
    navigate("/");
  };
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
      <div className={styles.target}>Hello world!</div>
    </main>
  );
};

import classNames from "classnames";
import styles from "./orders-page.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../services/actions/auth";

export function OrdersPage() {
  const mainClassNames = classNames(`${styles.main} container`);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <main className={mainClassNames}>
      <div className={styles.tabs}>
        <Link to={{ pathname: "/profile" }}>
          <Tab value="profile">Профиль</Tab>
        </Link>
        <Tab value="history" active="true">
          История заказов
        </Tab>
        <Tab value="logout" onClick={handleLogoutClick}>
          Выход
        </Tab>
      </div>
      <div className={styles.target}>Hello world!</div>
    </main>
  );
}

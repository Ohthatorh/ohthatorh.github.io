import { FC, useEffect } from "react";
import styles from "./feed-page.module.css";
import classNames from "classnames";
import { TClassnames } from "../../services/types/types";
import OrdersInfo from "../../components/orders-info/orders-info";
import OrdersList from "../../components/orders-list/orders-list";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../services/actions/wsActions";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { Preloader } from "../../components/preloader/preloader";

export const FeedPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);
  const orders = useAppSelector((store) => store.orders);
  const mainClassNames: TClassnames = classNames(`${styles.main} container`);
  return !orders.orders ? (
    <Preloader />
  ) : (
    <main className={mainClassNames}>
      <h1 className="text text_type_main-large mb-3">Лента заказов</h1>
      <section className={styles.orders}>
        <OrdersList orders={orders.orders} />
        <OrdersInfo />
      </section>
    </main>
  );
};

import { FC } from "react";
import styles from "./feed-page.module.css";
import classNames from "classnames";
import { TClassnames } from "../../services/types/types";
import OrdersInfo from "../../components/orders-info/orders-info";
import OrdersList from "../../components/orders-list/orders-list";
import { useSelector } from "react-redux";

export const FeedPage: FC = () => {
  const orders = useSelector((store: any) => store.orders);
  const mainClassNames: TClassnames = classNames(`${styles.main} container`);
  return (
    <main className={mainClassNames}>
      <h1 className="text text_type_main-large mb-3">Лента заказов</h1>
      <section className={styles.orders}>
        <OrdersList orders={orders.orders} />
        <OrdersInfo />
      </section>
    </main>
  );
};

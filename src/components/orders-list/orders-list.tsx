import { FC } from "react";
import styles from "./orders-list.module.css";
import OrderItem from "../order-item/order-item";
import { IOrderItem } from "../../services/types/types";
import { Preloader } from "../preloader/preloader";

const OrdersList: FC<{ orders: Array<IOrderItem> | null }> = ({ orders }) => {
  const reverseOrders = orders
    ? orders.sort(function (a, b) {
        return Date.parse(b.createdAt) - Date.parse(a.createdAt);
      })
    : null;
  return !reverseOrders ? (
    <Preloader />
  ) : (
    <div className={styles.orderList}>
      {reverseOrders.map((el: IOrderItem) => {
        return <OrderItem key={el._id} item={el} />;
      })}
    </div>
  );
};

export default OrdersList;

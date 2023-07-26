import { FC } from "react";
import styles from "./orders-list.module.css";
import OrderItem from "../order-item/order-item";
import { IOrderItem } from "../../services/types/types";

const OrdersList: FC<{ orders: Array<IOrderItem> | null }> = ({ orders }) => {
  return (
    <div className={styles.orderList}>
      {orders &&
        orders.map((el: IOrderItem) => {
          return <OrderItem key={el._id} item={el} />;
        })}
    </div>
  );
};

export default OrdersList;

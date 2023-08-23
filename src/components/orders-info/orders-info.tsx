import { FC } from "react";
import styles from "./orders-info.module.css";
import classNames from "classnames";
import { IOrderItem } from "../../services/types/types";
import { useAppSelector } from "../../services/hooks/hooks";

const OrdersInfo: FC = () => {
  const ordersInfoListTextsClassnames = classNames(
    `${styles.ordersInfoListTexts} ${styles.color}`
  );
  const orders = useAppSelector((store) => store.orders);
  const ordersDone =
    orders.orders !== null
      ? orders.orders.filter((el: IOrderItem) => el.status === "done")
      : [];
  const ordersInWork =
    orders.orders !== null
      ? orders.orders.filter((el: IOrderItem) => el.status !== "done")
      : [];
  const textClassNames = classNames(
    `${styles.text} text text_type_digits-large`
  );
  return (
    <div className={styles.ordersInfoWrap}>
      <div className={styles.ordersInfoLists}>
        <div className={styles.ordersInfoList}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <div className={ordersInfoListTextsClassnames}>
            {ordersDone.map((el: IOrderItem, index: number) => {
              return index < 10 ? (
                <p key={el._id} className="text text_type_digits-default mb-2">
                  {el.number}
                </p>
              ) : (
                ""
              );
            })}
          </div>
        </div>
        <div className={styles.ordersInfoList}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <div className={styles.ordersInfoListTexts}>
            {ordersInWork.map((el: IOrderItem, index: number) => {
              return index < 10 ? (
                <p key={el._id} className="text text_type_digits-default mb-2">
                  {el.number}
                </p>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.ordersInfo}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className={textClassNames}>{orders.total}</p>
      </div>
      <div className={styles.ordersInfo}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className={textClassNames}>{orders.totalToday}</p>
      </div>
    </div>
  );
};

export default OrdersInfo;

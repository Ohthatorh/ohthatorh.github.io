import classNames from "classnames";
import styles from "./order-infos.module.css";
import { FC } from "react";
import {
  IOrderItem,
  TClassnames,
  TIngredient,
} from "../../services/types/types";
import { OrderInfosIngredient } from "./order-infos-ingredient/order-infos-ingredient";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../services/hooks/hooks";

const OrderInfos: FC<{ order: IOrderItem }> = ({ order }) => {
  const ingredients = useAppSelector((store) => store.ingredients.items);
  const textClassnames: TClassnames = classNames(
    `${styles.text} text text_type_main-default mb-15`
  );
  const currentIngredients = order.ingredients.filter((el, index) => {
    return order.ingredients.indexOf(el) === index;
  });
  let total: number = 0;
  order.ingredients.forEach((item) => {
    total += ingredients.filter((el: TIngredient) => el._id === item)[0].price;
  });
  return (
    <div className={styles.modalWrap}>
      <p className="text text_type_digits-default mb-10">#{order.number}</p>
      <p className="text text_type_main-medium mb-3">{order.name}</p>
      {order.status === "created" && (
        <p className="text text_type_main-default mb-15">Создан</p>
      )}
      {order.status === "pending" && (
        <p className="text text_type_main-default mb-15">Готовится</p>
      )}
      {order.status === "done" && <p className={textClassnames}>Выполнен</p>}
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <ul className={styles.ingredientsList}>
        {currentIngredients.map((el) => {
          const item = ingredients.filter(
            (ing: TIngredient) => ing._id === el
          )[0];
          const count = order.ingredients.filter((ing) => ing === el).length;
          return <OrderInfosIngredient key={el} item={item} count={count} />;
        })}
      </ul>
      <div className={styles.orderInfo}>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
        <div className={styles.total}>
          <p className="text text_type_digits-default">{total}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderInfos;

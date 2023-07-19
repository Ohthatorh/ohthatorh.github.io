import { FC } from "react";
import styles from "./order-item.module.css";
import {
  IOrderItem,
  TClassnames,
  TIngredient,
} from "../../services/types/types";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import { OrderIngredient } from "./order-ingredient/order-ingredient";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const OrderItem: FC<{ item: IOrderItem }> = ({ item }) => {
  const location = useLocation();
  const textClassnames: TClassnames = classNames(
    `${styles.text} text text_type_main-default mb-6`
  );
  const priceClassNames: TClassnames = classNames(
    `${styles.price}`,
    "text text_type_digits-default"
  );
  const ingredients = useSelector((store: any) => store.ingredients.items);
  const currentIngredients = item.ingredients.filter((el, index) => {
    return item.ingredients.indexOf(el) === index;
  });
  let count: number = 0;
  item.ingredients.forEach((item) => {
    count += ingredients.filter((el: TIngredient) => el._id === item)[0].price;
  });
  return (
    <Link
      to={{
        pathname: `/feed/${item._id}`,
      }}
      state={{ background: location }}
      className={styles.orderItem}
    >
      <div className={styles.orderItemHeader}>
        <p className="text text_type_digits-default">#{item.number}</p>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(item.createdAt)} />
        </p>
      </div>
      <p className="text text_type_main-medium mb-2">{item.name}</p>
      {item.status === "created" && (
        <p className="text text_type_main-default mb-6">Создан</p>
      )}
      {item.status === "pending" && (
        <p className="text text_type_main-default mb-6">Готовится</p>
      )}
      {item.status === "done" && <p className={textClassnames}>Выполнен</p>}
      <div className={styles.orderItemDescription}>
        <div className={styles.orderItemIngredients}>
          {currentIngredients.map((el: string, index: number) => {
            return index < 5 ? (
              <OrderIngredient key={el} id={el} />
            ) : index === 5 ? (
              <OrderIngredient key={el} id={el} count={ingredients.length} />
            ) : null;
          })}
        </div>
        <p className={priceClassNames}>
          {count}
          <CurrencyIcon type="primary" />
        </p>
      </div>
    </Link>
  );
};

export default OrderItem;

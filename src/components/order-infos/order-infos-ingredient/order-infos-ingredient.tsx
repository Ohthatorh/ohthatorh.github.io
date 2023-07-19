import styles from "./order-infos-ingredient.module.css";
import { TIngredient } from "../../../services/types/types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

export const OrderInfosIngredient: FC<{ item: TIngredient; count: number }> = ({
  item,
  count,
}) => {
  return (
    <li className={styles.item}>
      <img className={styles.img} src={item.image} alt={item.name} />
      <p className="text text_type_main-default">{item.name}</p>
      <div className={styles.itemPriceWrap}>
        <p className="text text_type_digits-default">{count}</p>
        <p className="text text_type_digits-default">X</p>
        <p className="text text_type_digits-default">{count * item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};

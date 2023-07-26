import { FC } from "react";
import styles from "./order-ingredient.module.css";
import classNames from "classnames";
import { useAppSelector } from "../../../services/hooks/hooks";
import { TIngredient } from "../../../services/types/types";

export const OrderIngredient: FC<{ id: string; count?: number }> = ({
  id,
  count,
}) => {
  const textClassnames = classNames(
    `${styles.orderLast} text text_type_digits-default`
  );
  const ingredients = useAppSelector((store) => store.ingredients.items);
  const currentIngredient = ingredients.filter(
    (el: TIngredient) => el._id === id
  )[0];
  return (
    <div className={styles.orderIngredient}>
      <img
        src={currentIngredient.image}
        alt={currentIngredient.name}
        className={styles.orderIngredientImg}
      />
      {count && <p className={textClassnames}>+{count - 5}</p>}
    </div>
  );
};

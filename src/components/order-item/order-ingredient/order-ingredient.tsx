import { FC } from "react";
import styles from "./order-ingredient.module.css";
import { useSelector } from "react-redux";
import classNames from "classnames";

export const OrderIngredient: FC<{ id: string; count?: number }> = ({
  id,
  count,
}) => {
  const textClassnames = classNames(
    `${styles.orderLast} text text_type_digits-default`
  );
  const ingredients = useSelector((store: any) => store.ingredients.items);
  const currentIngredient = ingredients.filter((el: any) => el._id === id)[0];
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

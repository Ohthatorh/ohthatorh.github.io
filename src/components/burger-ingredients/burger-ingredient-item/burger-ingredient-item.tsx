import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import classNames from "classnames";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { FC } from "react";
import {
  IBurgerIngredientItem,
  TClassnames,
  TIngredient,
} from "../../../services/types/types";
import { useAppSelector } from "../../../services/hooks/hooks";

const BurgerIngredientItem: FC<IBurgerIngredientItem> = ({ item }) => {
  const location = useLocation();
  const [, dragRef] = useDrag({
    type: "ingredient",
    item,
  });
  const currentIngredients = useAppSelector(
    (store) => store.currentIngredients
  );
  const count =
    item.type === "bun" && currentIngredients.bun
      ? currentIngredients.bun._id === item._id
        ? 1
        : currentIngredients.items.filter(
            (el: TIngredient) => el._id === item._id
          ).length
      : currentIngredients.items.filter(
          (el: TIngredient) => el._id === item._id
        ).length;
  const textClassNames: TClassnames = classNames(
    `${styles.textBurgerItem}`,
    "text text_type_digits-default mb-1"
  );
  return (
    <>
      <li ref={dragRef} key={item._id}>
        <Link
          to={{
            pathname: `/ingredients/${item._id}`,
          }}
          state={{ background: location }}
          className={styles.burgerItem}
        >
          <picture className="pl-4 pr-4 pb-1">
            <source srcSet={item.image_mobile} media="(max-width: 767px)" />
            {/* <source srcset={item.image} media="(max-width: 1023px)" /> */}
            <img src={item.image} alt={item.name} />
          </picture>
          <p className={textClassNames}>
            {item.price}
            <CurrencyIcon type="primary" />
          </p>
          <Counter count={count} size="default" extraClass="m-1" />
          <p className="text text_type_main-default">{item.name}</p>
        </Link>
      </li>
    </>
  );
};

export default BurgerIngredientItem;

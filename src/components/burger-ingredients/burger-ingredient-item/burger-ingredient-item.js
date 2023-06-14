import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";

function BurgerIngredientItem({ item }) {
  const location = useLocation();
  const [, dragRef] = useDrag({
    type: "ingredient",
    item,
  });
  const currentIngredients = useSelector((store) => store.currentIngredients);
  const count =
    item.type === "bun" && currentIngredients.bun
      ? currentIngredients.bun._id === item._id
        ? 1
        : currentIngredients.items.filter((el) => el._id === item._id).length
      : currentIngredients.items.filter((el) => el._id === item._id).length;
  const textClassNames = classNames(
    `${styles.textBurgerItem}`,
    "text text_type_digits-default mb-1"
  );
  return (
    <>
      <li ref={dragRef} key={item._id} className={styles.burgerItem}>
        <Link
          to={{
            pathname: `/ingredients/${item._id}`,
          }}
          state={{ background: location }}
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
}

export default BurgerIngredientItem;

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import classNames from "classnames";

function BurgerIngredientItem({ item, index }) {
  const textClassNames = classNames(
    `${styles.textBurgerItem}`,
    "text text_type_digits-default mb-1"
  );
  const counterClassNames = classNames(
    `${styles.burgerItemCounter} text text_type_digits-default`
  );
  return (
    <li key={index} className={styles.burgerItem}>
      <picture className="pl-4 pr-4 pb-1">
        <source srcSet={item.image_mobile} media="(max-width: 767px)" />
        {/* <source srcset={item.image} media="(max-width: 1023px)" /> */}
        <img src={item.image} alt={item.name} />
      </picture>
      <p className={textClassNames}>
        {item.price}
        <CurrencyIcon type="primary" />
      </p>
      <p className={counterClassNames}>1</p>
      <p className="text text_type_main-default">{item.name}</p>
    </li>
  );
}

export default BurgerIngredientItem;

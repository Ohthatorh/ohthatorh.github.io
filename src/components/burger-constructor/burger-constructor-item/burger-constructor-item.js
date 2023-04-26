import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-item.module.css";
import classNames from "classnames";

function BurgerConstrucorItem({ item, index }) {
  const burgerConstrucorItemClassName = classNames(
    `${styles.burgerConstrucorItem}`
  );
  return (
    <li key={index} className={burgerConstrucorItemClassName}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
      />
    </li>
  );
}

export default BurgerConstrucorItem;

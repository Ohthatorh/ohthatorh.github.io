import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-item.module.css";
import classNames from "classnames";

function BurgerConstrucorItem({ item }) {
  const burgerConstrucorItemClassName = classNames(
    `${styles.burgerConstrucorItem}`
  );
  return (
    <li className={burgerConstrucorItemClassName}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
      />
    </li>
  );
}

BurgerConstrucorItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default BurgerConstrucorItem;

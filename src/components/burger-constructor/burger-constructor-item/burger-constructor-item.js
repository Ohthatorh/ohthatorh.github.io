import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-item.module.css";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../../services/actions/currentIngredients";
import { useDrag } from "react-dnd";

function BurgerConstrucorItem({ item }) {
  const burgerConstrucorItemClassName = classNames(
    `${styles.burgerConstrucorItem}`
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: REMOVE_INGREDIENT,
      id: item._id,
    });
  };
  const [, dragRef] = useDrag({
    type: "currentIngredient",
    item,
  });
  return (
    <li className={burgerConstrucorItemClassName} ref={dragRef}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={handleClose}
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

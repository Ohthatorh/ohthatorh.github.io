import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import styles from "./burger-constructor-info.module.css";
import classNames from "classnames";
import OrderDetails from "../../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../../services/actions/order";

function BurgerConstrucorInfo() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const textClassNames = classNames(
    `${styles.burgerConstructorInfoText} text text_type_digits-medium mr-10`
  );
  const dispatch = useDispatch();
  const ingredients = useSelector((store) => store.currentIngredients.items);
  const { orderId } = useSelector((store) => store.order);
  const bun = useSelector((store) => store.currentIngredients.bun);
  useEffect(() => {
    const countPrices = ingredients.length
      ? ingredients.reduce((sum, a) => sum + a.price, 0) +
        (bun ? bun.price * 2 : 0)
      : 0;
    setAmount(countPrices);
    //eslint-disable-next-line
  }, [ingredients, bun]);

  const handleOpenModal = () => {
    const choosedIngredients = ingredients.map((el) => el._id);
    choosedIngredients.push(bun._id);
    dispatch(postOrder(choosedIngredients, setShowModal));
  };
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      {showModal && (
        <OrderDetails orderId={orderId} onClose={handleCloseModal} />
      )}
      <div className={styles.burgerInfoWrap}>
        <p className={textClassNames}>
          {amount}
          <CurrencyIcon type="primary" />
        </p>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOpenModal}
          disabled={!ingredients.length && !bun}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
}

export default BurgerConstrucorInfo;

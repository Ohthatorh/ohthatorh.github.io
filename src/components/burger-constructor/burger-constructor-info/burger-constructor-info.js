import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useContext, useEffect, useReducer, useState } from "react";
import styles from "./burger-constructor-info.module.css";
import classNames from "classnames";
import OrderDetails from "../../order-details/order-details";
import { IngredientsContext } from "../../../services/ingredientsContext";
import { postOrder } from "../../../utils/burger-api";
import { OrderContext } from "../../../services/orderContext";

const initialState = {
  hasError: false,
  isPending: false,
  orderId: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "pending":
      return { ...state, hasError: false, isPending: true };
    case "success":
      return {
        orderId: action.orderId,
        isPending: false,
        hasError: true,
      };
    case "error":
      return { ...state, isPending: false, hasError: true };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function BurgerConstrucorInfo() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [orderNumber, dispatchOrderNumber] = useReducer(reducer, initialState);
  const textClassNames = classNames(
    `${styles.burgerConstructorInfoText} text text_type_digits-medium mr-10`
  );
  const ingredients = useContext(IngredientsContext);
  const bun = ingredients.filter((el) => el.type === "bun")[0];
  const ingredientsWithoutBun = ingredients.filter((el) => el.type !== "bun");
  useEffect(() => {
    const countPrices =
      ingredientsWithoutBun.reduce((sum, a) => sum + a.price, 0) +
      bun.price * 2;
    setAmount(countPrices);
  }, [ingredients]);

  const handleOpenModal = () => {
    dispatchOrderNumber({ type: "pending" });
    const choosedIngredients = ingredients.map((el) => el._id);
    choosedIngredients.push(bun._id);
    postOrder(choosedIngredients)
      .then((res) => {
        dispatchOrderNumber({
          type: "success",
          orderId: res.order.number,
        });
        setShowModal(true);
      })
      .catch((e) => {
        dispatchOrderNumber({ type: "error" });
      });
  };
  const handleCloseModal = () => setShowModal(false);
  return (
    <OrderContext.Provider value={orderNumber}>
      {showModal && (
        <OrderDetails order={orderNumber} onClose={handleCloseModal} />
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
        >
          Оформить заказ
        </Button>
      </div>
    </OrderContext.Provider>
  );
}

export default BurgerConstrucorInfo;

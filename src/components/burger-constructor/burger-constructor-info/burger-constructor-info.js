import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./burger-constructor-info.module.css";
import classNames from "classnames";
import OrderDetails from "../../order-details/order-details";

function BurgerConstrucorInfo() {
  const [showModal, setShowModal] = useState(false);
  const textClassNames = classNames(
    `${styles.burgerConstructorInfoText} text text_type_digits-medium mr-10`
  );
  const order = {
    orderId: 666666,
  };
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      {showModal && <OrderDetails order={order} onClose={handleCloseModal} />}
      <div className={styles.burgerInfoWrap}>
        <p className={textClassNames}>
          610
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
    </>
  );
}

export default BurgerConstrucorInfo;

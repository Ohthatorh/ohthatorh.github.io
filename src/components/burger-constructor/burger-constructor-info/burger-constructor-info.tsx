import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useEffect, useState } from "react";
import styles from "./burger-constructor-info.module.css";
import classNames from "classnames";
import OrderDetails from "../../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../../services/actions/order";
import { useNavigate } from "react-router-dom";
import { TIngredient } from "../../../services/types/types";

const BurgerConstrucorInfo: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const textClassNames = classNames(
    `${styles.burgerConstructorInfoText} text text_type_digits-medium mr-10`
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredients = useSelector(
    (store: any) => store.currentIngredients.items
  );
  const { orderId } = useSelector((store: any) => store.order);
  const bun = useSelector((store: any) => store.currentIngredients.bun);
  const user = useSelector((store: any) => store.user.user);
  useEffect(() => {
    const countPrices = ingredients.length
      ? ingredients.reduce((sum: number, a: TIngredient) => sum + a.price, 0) +
        (bun ? bun.price * 2 : 0)
      : 0;
    setAmount(countPrices);
    //eslint-disable-next-line
  }, [ingredients, bun]);

  const handleOpenModal = () => {
    const choosedIngredients = ingredients.map((el: TIngredient) => el._id);
    choosedIngredients.push(bun._id);
    if (user.name) {
      dispatch<any>(postOrder(choosedIngredients, setShowModal));
    } else {
      navigate("/login");
    }
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
};

export default BurgerConstrucorInfo;

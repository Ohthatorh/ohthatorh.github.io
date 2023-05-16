import styles from "./order-details.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import Modal from "../modal/modal";
import doneImage from "../../images/done.svg";

function OrderDetails({ orderId, onClose }) {
  const orderNumberClassNames = classNames(
    `${styles.orderNumber} text text_type_digits-large mb-8`
  );
  const textClassNames = classNames(
    `${styles.orderText} text text_type_main-default`
  );
  return (
    <Modal onClose={onClose}>
      <div className={styles.orderModal}>
        <p className={orderNumberClassNames}>{orderId}</p>
        <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
        <img className="mb-15" src={doneImage} alt="Готовим заказ" />
        <p className="text text_type_main-default mb-2">
          Ваш заказ начали готовить
        </p>
        <p className={textClassNames}>
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  );
}

OrderDetails.propTypes = {
  orderId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OrderDetails;

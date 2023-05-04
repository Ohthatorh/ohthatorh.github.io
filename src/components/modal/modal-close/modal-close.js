import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal-close.module.css";
import PropTypes from "prop-types";

function ModalClose({ onClose }) {
  return (
    <button className={styles.modalClose} onClick={onClose}>
      <CloseIcon type="primary" />
    </button>
  );
}

ModalClose.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalClose;

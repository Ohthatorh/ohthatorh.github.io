import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal-close.module.css";

function ModalClose({ onClose }) {
  return (
    <button className={styles.modalClose} onClick={onClose}>
      <CloseIcon type="primary" />
    </button>
  );
}

export default ModalClose;

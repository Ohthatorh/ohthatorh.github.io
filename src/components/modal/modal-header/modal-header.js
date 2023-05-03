import ModalClose from "../modal-close/modal-close";
import styles from "./modal-header.module.css";

function ModalHeader({ text, onClose }) {
  return (
    <div className={styles.modalHeader}>
      <p className="text text_type_main-large">{text}</p>
      <ModalClose onClose={onClose} />
    </div>
  );
}

export default ModalHeader;

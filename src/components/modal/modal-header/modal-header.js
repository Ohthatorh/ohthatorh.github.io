import ModalClose from "../modal-close/modal-close";
import styles from "./modal-header.module.css";
import PropTypes from "prop-types";

function ModalHeader({ text, onClose }) {
  return (
    <div className={styles.modalHeader}>
      <p className="text text_type_main-large">{text}</p>
      <ModalClose onClose={onClose} />
    </div>
  );
}

ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default ModalHeader;

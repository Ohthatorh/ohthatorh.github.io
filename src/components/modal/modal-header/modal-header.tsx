import { IModal } from "../../../services/types/types";
import ModalClose from "../modal-close/modal-close";
import styles from "./modal-header.module.css";
import { FC } from "react";

const ModalHeader: FC<IModal> = ({ text, onClose }) => {
  return (
    <div className={styles.modalHeader}>
      <p className="text text_type_main-large">{text}</p>
      <ModalClose onClose={onClose} />
    </div>
  );
};

export default ModalHeader;

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal-close.module.css";
import { FC } from "react";
import { IModal } from "../../../services/types/types";

const ModalClose: FC<IModal> = ({ onClose }) => {
  return (
    <button className={styles.modalClose} onClick={onClose}>
      <CloseIcon type="primary" />
    </button>
  );
};

export default ModalClose;

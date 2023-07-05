import { IModal } from "../../../services/types/types";
import styles from "./modal-overlay.module.css";
import { FC } from "react";

const ModalOverlay: FC<IModal> = ({ onClose }) => {
  return <div className={styles.modalOverlay} onClick={onClose}></div>;
};

export default ModalOverlay;

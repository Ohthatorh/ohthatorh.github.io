import ReactDOM from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay";
import ModalHeader from "./modal-header/modal-header";
import styles from "./modal.module.css";
import classNames from "classnames";
import { useEffect, FC } from "react";
import { IModal, TClassnames } from "../../services/types/types";

const Modal: FC<IModal> = ({ children, text, onClose }) => {
  const modalRoot = document.getElementById("modals");
  const modalClassNames: TClassnames = classNames(
    `${styles.modal} pt-10 pr-10 pb-15 pl-10`
  );
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line
  }, []);
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={modalClassNames}>
        <ModalHeader text={text} onClose={onClose} />
        {children}
      </div>
    </>,
    modalRoot!
  );
};

export default Modal;

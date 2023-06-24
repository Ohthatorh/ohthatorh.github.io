import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalOverlay from "./modal-overlay/modal-overlay";
import ModalHeader from "./modal-header/modal-header";
import styles from "./modal.module.css";
import classNames from "classnames";
import { useEffect } from "react";

function Modal({ children, text, onClose }) {
  const modalRoot = document.getElementById("modals");
  const modalClassNames = classNames(`${styles.modal} pt-10 pr-10 pb-15 pl-10`);
  useEffect(() => {
    const close = (e) => {
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
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

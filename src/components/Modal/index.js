import style from "./style.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={style.modal} onClick={onClose} />
      <div className={style.modal__content}>{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;

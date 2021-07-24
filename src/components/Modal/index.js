import style from "./style.module.css";

const Modal = ({ onClose, children }) => {
  return (
    <>
      <div className={style.modal} onClick={onClose} />
      <div className={style.modal__content}>{children}</div>
    </>
  );
};

export default Modal;

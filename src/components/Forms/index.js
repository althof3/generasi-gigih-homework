import style from "./style.module.css";

export const InputText = ({ isValid, name, label, value, ...props }) => {
  return (
    <div className={style.input__wrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        value={value}
        id={name}
        name={name}
        type="text"
        className={!isValid ? style.input__error : ""}
      />
      {!isValid && (
        <div className={style.form__error}>{label} is too short 😟</div>
      )}
    </div>
  );
};

export const InputTextArea = ({ isValid, name, label, value, ...props }) => {
  return (
    <div className={style.input__wrapper}>
      <label htmlFor={name}>{label}</label>
      <textarea
        {...props}
        value={value}
        id={name}
        name={name}
        className={!isValid ? style.input__error : ""}
      />
      {!isValid && (
        <div className={style.form__error}>{label} is too short 😟</div>
      )}
    </div>
  );
};

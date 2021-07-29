import Style from "./style.module.css";

const Button = ({ children, to, additionalStyle, ...props }) => {
  if (to) {
    return (
      <button
        {...props}
        onClick={() => window.open(to)}
        className={`${Style.Button} ${additionalStyle}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button {...props} className={`${Style.Button} ${additionalStyle ?? ''}`}>
      {children}
    </button>
  );
};

export default Button;

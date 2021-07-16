import Style from "./style.module.css";

const Button = ({ children, to, ...props }) => {
  return (
    <button
      {...props}
      onClick={() => window.open(to)}
      className={`${Style.Button}`}
    >
      {children}
    </button>
  );
};

export default Button;

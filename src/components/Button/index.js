import Style from './style.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={Style.Button}
    >
      {children}
    </button>
  );
};

export default Button;

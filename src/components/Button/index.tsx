import Style from "./style.module.css";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  to?: string;
  additionalStyle?: string | boolean;
  onClick?: () => void;
}

const Button: React.FC<props> = ({ children, to, additionalStyle, ...props }) => {
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
    <button {...props} className={`${Style.Button} ${additionalStyle ?? ""}`}>
      {children}
    </button>
  );
};

export default Button;

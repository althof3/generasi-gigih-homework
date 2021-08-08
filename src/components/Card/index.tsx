import Style from "./style.module.css";

const Card: React.FC = ({ children, ...props }) => {
  return (
    <div {...props} className={Style.Card}>
      {children}
    </div>
  );
};

export default Card;

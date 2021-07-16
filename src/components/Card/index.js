import Style from "./style.module.css";

const Card = ({ children, ...props }) => {
  return (
    <div {...props} className={Style.Card}>
      {children}
    </div>
  );
};

export default Card;

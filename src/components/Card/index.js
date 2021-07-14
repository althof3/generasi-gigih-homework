import Style from "./card.module.css";

const Card = ({ children }) => {
  return <div className={Style.Card}>{children}</div>;
};

export default Card;

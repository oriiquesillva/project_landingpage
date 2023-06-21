"use client"
import Styles from "./button.module.scss";


const Button = ({ icon, title, kind, onClick, type }) => {
  const changeButtonClass = () => {
    if (kind === "secundary") return Styles.secundary;
    if (kind === "full") return Styles.full;

    return Styles.primary;
  };

  return (
    <button
      type={type}
      className={`${Styles.button} ${changeButtonClass()}`}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
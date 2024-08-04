import style from "./ButtonContainer.module.css";
function ButtonContainer({ buttons, butOnClick }) {
  return (
    <div className={style.buttonContainer}>
      {buttons.map((button) => (
        <button
          key={button}
          className={style.button}
          onClick={() => butOnClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
export default ButtonContainer;

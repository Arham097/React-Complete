import style from "./ButtonContainer.module.css";
function ButtonContainer({ buttons }) {
  console.log(buttons);
  return (
    <div className={style.buttonContainer}>
      {buttons.map((button) => (
        <button className={style.button}>{button}</button>
      ))}
    </div>
  );
}
export default ButtonContainer;

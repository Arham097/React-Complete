import style from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
function App() {
  let calcButtons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={style.calculator}>
        <Display></Display>
        <ButtonContainer buttons={calcButtons}></ButtonContainer>
      </div>
    </>
  );
}

export default App;

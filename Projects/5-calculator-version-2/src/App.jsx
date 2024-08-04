import style from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

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
  let [displayValue, setDisplayValue] = useState("");
  let butOnClick = (buttonText) => {
    if (buttonText === "C") {
      setDisplayValue("");
    } else if (buttonText === "=") {
      setDisplayValue(eval(displayValue));
    } else {
      let newDisplayValue = displayValue + buttonText;
      setDisplayValue(newDisplayValue);
    }
  };

  // let displayValue = 0;
  return (
    <>
      <div className={style.calculator}>
        <Display displayValue={displayValue}></Display>
        <ButtonContainer
          buttons={calcButtons}
          butOnClick={butOnClick}
        ></ButtonContainer>
      </div>
    </>
  );
}

export default App;

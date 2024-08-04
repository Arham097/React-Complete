import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Vegis", "Ghee", "Oil", "Bread", "Flour"];

  // let [textToShow, setTextToShow] = useState();
  let [foodItems, setFoodItems] = useState([]);
  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newItem = event.target.value;
      let newFoods = [...foodItems, newItem];
      setFoodItems(newFoods);
      event.target.value = "";
    }
  };
  return (
    <>
      <Container>
        <h1 className="kg-heading">Food Items</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;

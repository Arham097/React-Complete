import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "24/6/2024",
    },
    {
      name: "Wash Clothes",
      dueDate: "24/6/2024",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(itemName, itemDueDate);
    let newItem = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <div className="container text-center">
          <AddTodo onNewItem={handleNewItem}></AddTodo>
          {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <TodoItems
            todoItems={todoItems}
            handleDeleteItem={handleDeleteItem}
          ></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;

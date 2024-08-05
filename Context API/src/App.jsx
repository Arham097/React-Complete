import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

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

  const addNewItem = (itemName, itemDueDate) => {
    let newItem = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newItem);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <center className="todo-container">
          <AppName></AppName>
          <div className="container text-center">
            <AddTodo></AddTodo>
            <WelcomeMessage></WelcomeMessage>
            <TodoItems></TodoItems>
          </div>
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;

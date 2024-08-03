import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "24/6/2024",
    },
    {
      name: "Wash Clothes",
      dueDate: "24/6/2024",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <div className="container text-center">
          <AddTodo></AddTodo>
          <TodoItems todoItems={todoItems}></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;

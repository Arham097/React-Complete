import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <div class="container text-center">
          <AddTodo></AddTodo>
          <div className="text">
            <TodoItem1></TodoItem1>
            <TodoItem2></TodoItem2>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;

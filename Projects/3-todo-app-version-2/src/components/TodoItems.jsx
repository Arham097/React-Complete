import TodoItem from "./TodoItem";

let TodoItems = ({ todoItems }) => {
  return (
    <div className="text">
      {todoItems.map((item) => {
        <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>;
      })}
    </div>
  );
};
export default TodoItems;

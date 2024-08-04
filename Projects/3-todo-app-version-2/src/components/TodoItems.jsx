import TodoItem from "./TodoItem";

let TodoItems = ({ todoItems }) => {
  return (
    <div className="text">
      {todoItems.map((item) => {
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>;
      })}
    </div>
  );
};
export default TodoItems;

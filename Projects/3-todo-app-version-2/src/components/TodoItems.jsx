import TodoItem from "./TodoItem";

let TodoItems = ({ todoItems }) => {
  return (
    <div className="text">
      {todoItems.map((item, index) => {
        return (
          <TodoItem
            key={index}
            todoDate={item.dueDate}
            todoName={item.name}
          ></TodoItem>
        );
      })}
    </div>
  );
};
export default TodoItems;

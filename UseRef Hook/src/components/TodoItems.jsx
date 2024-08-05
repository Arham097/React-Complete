import TodoItem from "./TodoItem";

let TodoItems = ({ todoItems, handleDeleteItem }) => {
  return (
    <div className="text">
      {todoItems.map((item, index) => (
        <TodoItem
          handleDeleteItem={handleDeleteItem}
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;

import { useState, useRef } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  let handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <center>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            types="button"
            className="btn btn-success row-button"
            onClick={handleAddButtonClicked}
          >
            <MdOutlineAddCircle />
          </button>
        </div>
      </div>
    </center>
  );
}
export default AddTodo;

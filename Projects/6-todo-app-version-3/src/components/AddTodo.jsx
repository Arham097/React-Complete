import { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  let handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  let handleDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  let handleAddButtonClicked = () => {
    onNewItem(todoName, todoDueDate);
    setTodoName("");
    setTodoDueDate("");
  };

  return (
    <center>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            value={todoDueDate}
            onChange={handleDateChange}
          />
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

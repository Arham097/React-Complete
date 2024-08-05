import { MdOutlineAddCircle } from "react-icons/md";

function AddTodo() {
  return (
    <center>
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success row-button">
            <MdOutlineAddCircle />
          </button>
        </div>
      </div>
    </center>
  );
}
export default AddTodo;

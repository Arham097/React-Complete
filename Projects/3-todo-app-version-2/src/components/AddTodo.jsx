import { MdOutlineAddCircle } from "react-icons/md";

function AddTodo() {
  return (
    <center>
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" name="" id="" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success row-button">
            <MdOutlineAddCircle />
          </button>
        </div>
      </div>
    </center>
  );
}
export default AddTodo;

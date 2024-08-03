let TodoItem = ({ todoName, todoDate }) => {
  // console.log(todoDate);
  return (
    <div className="row row-items">
      <div className="col-6">dasdas</div>
      <div className="col-4">adsdas</div>
      <div className="col-2">
        <button type="button " className="btn btn-danger row-button">
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;

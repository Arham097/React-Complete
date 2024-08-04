function TodoItem({ todoName, todoDate }) {
  // console.log(todoDate);
  return (
    <div className="container">
      <div className="row row-items">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button " className="btn btn-danger row-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;

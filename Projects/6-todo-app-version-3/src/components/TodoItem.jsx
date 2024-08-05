function TodoItem({ todoName, todoDate, handleDeleteItem }) {
  // console.log(todoDate);
  const onDelete = () => {
    handleDeleteItem(todoName);
  };
  return (
    <div className="container">
      <div className="row row-items">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button "
            className="btn btn-danger row-button del-button"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;

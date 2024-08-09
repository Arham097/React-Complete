import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const addValue = useRef();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: addValue.current.value,
      },
    });
    addValue.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: addValue.current.value,
      },
    });
    addValue.current.value = "";
  };
  const privacyHandler = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          onClick={incrementHandler}
          className="btn btn-primary btn-lg px-4 gap-3"
          fdprocessedid="vtzv8a"
        >
          +1
        </button>
        <button
          type="button"
          onClick={decrementHandler}
          className="btn btn-success btn-lg px-4"
          fdprocessedid="0xznc9"
        >
          -1
        </button>
        <button
          type="button"
          onClick={privacyHandler}
          className="btn btn-warning btn-lg px-4"
          fdprocessedid="0xznc9"
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center row-control">
        <input type="text" ref={addValue} placeholder="Enter Number Here" />

        <button
          type="button"
          onClick={handleAdd}
          className="btn btn-primary btn-lg px-4 gap-3"
          fdprocessedid="vtzv8a"
        >
          Add
        </button>
        <button
          type="button"
          onClick={handleSubtract}
          className="btn btn-danger btn-lg px-4"
          fdprocessedid="0xznc9"
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;

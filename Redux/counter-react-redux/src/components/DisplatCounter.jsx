import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <p className="lead mb-4">
      <b>Current Counter Value: {counter}</b>{" "}
    </p>
  );
};

export default DisplayCounter;

import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <p className="lead mb-4">
      <b>Current Counter Value: {counterVal}</b>{" "}
    </p>
  );
};

export default DisplayCounter;

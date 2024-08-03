import styles from "./FoodInput.module.css";

let FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Items Here"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default FoodInput;

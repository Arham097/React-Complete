import styles from "./Item.module.css";

let Item = ({ foodItem, bought, boughtOnClick }) => {
  return (
    <li className={`${styles["kg-item"]} ${bought && styles["kg-item1"]}`}>
      {foodItem}
      <button className={styles.buyButton} onClick={boughtOnClick}>
        Buy
      </button>
    </li>
  );
};
export default Item;

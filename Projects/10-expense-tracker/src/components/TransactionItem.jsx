const TransactionItem = ({ items }) => {
  const border = items.income ? "green" : "red";
  return (
    <div className={`transaction_item ${border}_border`}>
      <p>{items.description}</p>
      <p>{items.amount}</p>
    </div>
  );
};
export default TransactionItem;

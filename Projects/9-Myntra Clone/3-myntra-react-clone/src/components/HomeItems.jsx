import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(bagActions.addItems(item.id));
  };
  const handleDeleteItems = () => {
    dispatch(bagActions.removeItem(item.id));
  };
  const bag = useSelector((store) => store.bag);
  const elementFound = bag.indexOf(item.id) >= 0;

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn-add-bag btn  btn-danger"
          onClick={handleDeleteItems}
        >
          Remove from Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn-add-bag btn btn-success "
          onClick={handleAddItems}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItems;

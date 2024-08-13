import { useRef } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ handleLocation }) => {
  const location = useRef();
  const onClicklocationHandler = () => {
    handleLocation(location.current.value);
  };
  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      handleLocation(location.current.value);
    }
  };
  return (
    <div className="search_bar">
      <input
        type="text"
        placeholder="Enter Place"
        ref={location}
        onKeyDown={onKeyDownHandler}
      />
      <IoMdSearch className="icon" onClick={onClicklocationHandler} />
    </div>
  );
};
export default SearchBar;

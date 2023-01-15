import { InputContainer } from "./SearchInput.styles";

import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <InputContainer>
      <input type="text" placeholder="Search for products, brands and more" />
      <div className="search-btn">
        <IoSearch />
      </div>
    </InputContainer>
  );
};

export default SearchInput;

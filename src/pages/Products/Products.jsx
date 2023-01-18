import { useState } from "react";

//styles
import {
  Container,
  FiltersContainer,
  FiltersHeader,
  FiltersCategory,
  Filter,
  ProductsWrapper,
  ProductsContainer,
  SortProductsBox,
} from "./Products.styles";

//icons
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

//data
import products from "../../data/products.json";

//utils
import {
  sizeFiltered,
  brandFiltered,
  genderFiltered,
  standardName,
  getSortedProducts,
} from "../../utils";

//component
import { ProductCard } from "../../components";

const Products = () => {
  const [productsData, setProductsData] = useState(products.clothes);

  const [isFilterDisplayed, setIsFilterDisplayed] = useState({
    size: false,
    brand: false,
    gender: false,
  });

  const [sortType, setSortType] = useState("");

  //filter inputs state
  const defaultSizeInput = { s: "", m: "", l: "", xl: "" };
  const [sizeInput, setSizeInput] = useState(defaultSizeInput);

  const defaultBrandInput = {
    americaneagle: "",
    hollister: "",
    zara: "",
    hm: "",
  };
  const [brandInput, setBrandInput] = useState(defaultBrandInput);

  const defaultGenderInput = {
    men: "",
    women: "",
    babyboys: "",
    babygirls: "",
  };
  const [genderInput, setGenderInput] = useState(defaultGenderInput);

  //filters
  const sizes = ["s", "l", "m", "xl"];
  const brands = ["American Eagle", "Hollister", "Zara", "H&M"];
  const genders = ["Men", "Women", "Baby Boys", "Baby Girls"];

  //handle all filters
  const filterHandler = (e, type) => {
    const { name, checked } = e.target;
    let updatedSizeInput = sizeInput;
    let updatedBrandInput = brandInput;
    let updatedGenderInput = genderInput;

    if (type === "size") {
      updatedSizeInput = { ...sizeInput, [name]: checked };
      setSizeInput(updatedSizeInput);
    } else if (type === "brand") {
      updatedBrandInput = { ...brandInput, [name]: checked };
      setBrandInput(updatedBrandInput);
    } else if (type === "gender") {
      updatedGenderInput = { ...genderInput, [name]: checked };
      setGenderInput(updatedGenderInput);
    }

    const sizeFilterdData = sizeFiltered(
      updatedSizeInput,
      products.clothes,
      sortType
    );

    const brandFilteredData = brandFiltered(
      updatedBrandInput,
      sizeFilterdData,
      sortType
    );

    const genderFilterdData = genderFiltered(
      updatedGenderInput,
      brandFilteredData,
      sortType
    );

    setProductsData(genderFilterdData);
  };

  // sort products
  const sortHandler = (type) => {
    const sortedProducts = getSortedProducts(type, productsData);
    setProductsData(sortedProducts);
    setSortType(type);
  };

  //clear all filters
  const clearFilters = () => {
    setSizeInput(defaultSizeInput);
    setBrandInput(defaultBrandInput);
    setGenderInput(defaultGenderInput);
    setProductsData(getSortedProducts(sortType, products.clothes));
  };

  //get filters header
  const filterCategoryHeader = (name) => {
    const smallName = name.toLowerCase();

    const clickHandler = () => {
      setIsFilterDisplayed((prev) => ({
        ...prev,
        [smallName]: !prev[smallName],
      }));
    };

    return (
      <div className="products__filters-category-header" onClick={clickHandler}>
        <span>{name}</span>
        {isFilterDisplayed.size ? (
          <MdKeyboardArrowUp />
        ) : (
          <MdKeyboardArrowDown />
        )}
      </div>
    );
  };

  return (
    <Container>
      <FiltersContainer>
        <FiltersHeader>
          <div className="products__filters-header-content">
            <div className="products__filters-header-title">Filters</div>
            <div className="products__filters-clear-btn" onClick={clearFilters}>
              CLEAR ALL
            </div>
          </div>
          <div className="products__selected-filters"></div>
        </FiltersHeader>
        <FiltersCategory>
          {filterCategoryHeader("Size")}

          {isFilterDisplayed.size && (
            <div className="products__filters">
              {sizes.map((size, i) => (
                <Filter key={i}>
                  <input
                    type="checkbox"
                    id={size}
                    name={size}
                    checked={sizeInput[size]}
                    onChange={(e) => filterHandler(e, "size")}
                  />
                  <label htmlFor={size}>{size.toUpperCase()}</label>
                </Filter>
              ))}
            </div>
          )}
        </FiltersCategory>

        <FiltersCategory>
          {filterCategoryHeader("Brand")}

          {isFilterDisplayed.brand && (
            <div className="products__filters">
              {brands.map((brand, i) => (
                <Filter key={i}>
                  <input
                    type="checkbox"
                    id={brand}
                    name={standardName(brand)}
                    checked={brandInput[standardName(brand)]}
                    onChange={(e) => filterHandler(e, "brand")}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </Filter>
              ))}
            </div>
          )}
        </FiltersCategory>

        <FiltersCategory>
          {filterCategoryHeader("Gender")}
          {isFilterDisplayed.gender && (
            <div className="products__filters">
              {genders.map((gender, i) => (
                <Filter key={i}>
                  <input
                    type="checkbox"
                    id={gender}
                    name={standardName(gender)}
                    checked={genderInput[standardName(gender)]}
                    onChange={(e) => filterHandler(e, "gender")}
                  />
                  <label htmlFor={gender}>{gender}</label>
                </Filter>
              ))}
            </div>
          )}
        </FiltersCategory>
      </FiltersContainer>

      <ProductsWrapper>
        <SortProductsBox>
          <span className="products__sort-title">Sort By</span>
          <span
            className={`products__sort-btn ${
              sortType === "ascen" && "products__sort-btn--active"
            }`}
            onClick={() => sortHandler("ascen")}
          >
            Price -- Low to High
          </span>
          <span
            className={`products__sort-btn ${
              sortType === "descen" && "products__sort-btn--active"
            }`}
            onClick={() => sortHandler("descen")}
          >
            Price -- High to Low
          </span>
        </SortProductsBox>

        <ProductsContainer>
          {productsData.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ProductsContainer>
      </ProductsWrapper>
    </Container>
  );
};

export default Products;

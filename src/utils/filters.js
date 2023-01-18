import standardName from "./standardName";

import getSortedProducts from "./getSortedProducts";

// get selected filters
const getSelectedFilters = (updatedInput) => {
  const selectedFilters = [];
  for (const key in updatedInput) {
    if (updatedInput[key]) {
      selectedFilters.push(key);
    }
  }
  return selectedFilters;
};

//FILTERS

//handle sizes filter
export const sizeFiltered = (updatedInput, data, sortType) => {
  const selectedSizes = getSelectedFilters(updatedInput);
  if (selectedSizes.length === 0) {
    return getSortedProducts(sortType, data);
  }

  const newProducts = data.filter((product) => {
    let filterdProduct;
    selectedSizes.forEach((selectedSize) => {
      if (product.sizes.find((size) => size.toLowerCase() === selectedSize)) {
        filterdProduct = product;
      }
    });
    return filterdProduct;
  });

  return newProducts;
};

// handle brands filter
export const brandFiltered = (updatedInput, data, sortType) => {
  const selectedBrands = getSelectedFilters(updatedInput);

  if (selectedBrands.length === 0) {
    return getSortedProducts(sortType, data);
  }

  const newProducts = data.filter((product) =>
    selectedBrands.find((brand) => brand === standardName(product.brand))
  );

  return newProducts;
};

// handle gender filer
export const genderFiltered = (updatedInput, data, sortType) => {
  const selectedGender = getSelectedFilters(updatedInput);

  if (selectedGender.length === 0) {
    return getSortedProducts(sortType, data);
  }

  const newProducts = data.filter((product) =>
    selectedGender.find((gender) => gender === standardName(product.gender))
  );

  return newProducts;
};

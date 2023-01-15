import getAmount from "./getAmount";

const getSortedProducts = (type, productsData) => {
  let sortedList;

  if (type === "ascen") {
    sortedList = [...productsData].sort((a, b) => {
      return getAmount(a.amount, a.discount) > getAmount(b.amount, b.discount)
        ? 1
        : -1;
    });
  } else {
    sortedList = [...productsData].sort((a, b) => {
      return getAmount(b.amount, b.discount) > getAmount(a.amount, a.discount)
        ? 1
        : -1;
    });
  }

  return sortedList;
};

export default getSortedProducts;

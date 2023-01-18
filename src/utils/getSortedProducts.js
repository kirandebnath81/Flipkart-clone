import getAmount from "./getAmount";

const getSortedProducts = (type, productsData) => {
  let sortedList;

  if (type === "ascen") {
    sortedList = [...productsData].sort((a, b) =>
      getAmount(a.amount, a.discount) > getAmount(b.amount, b.discount) ? 1 : -1
    );
  } else if (type === "descen") {
    sortedList = [...productsData].sort((a, b) =>
      getAmount(b.amount, b.discount) > getAmount(a.amount, a.discount) ? 1 : -1
    );
  } else {
    sortedList = productsData;
  }

  return sortedList;
};

export default getSortedProducts;

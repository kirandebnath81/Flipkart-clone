const standardName = (brand) => {
  if (brand === "H&M") {
    return "hm";
  } else {
    return brand.split(" ").join("").toLowerCase();
  }
};

export default standardName;

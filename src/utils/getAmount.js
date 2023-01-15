const getAmount = (amount, discount) => {
  return amount - amount * (discount / 100);
};

export default getAmount;

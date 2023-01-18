const getAmount = (amount, discount) => {
  return (amount - amount * (discount / 100)).toFixed(0);
};

export default getAmount;

const calculateShippingCosts = (quantity, shippingOption) => {
  var firstUnitPrice;
  var additionalUnitPrice;

  if (shippingOption === "domestic") {
    firstUnitPrice = 8;
    additionalUnitPrice = 4;
  } else if (shippingOption === "international") {
    firstUnitPrice = 30;
    additionalUnitPrice = 10;
  }

  if (quantity == 1) {
    return firstUnitPrice;
  } else if (quantity >= 2) {
    return firstUnitPrice + (quantity - 1) * additionalUnitPrice;
  }
};

export { calculateShippingCosts };

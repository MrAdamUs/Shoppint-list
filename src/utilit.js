const calculateTotal = (setTotalItemCount, items) => {
  const totalItemCount = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  setTotalItemCount(totalItemCount);
};

export { calculateTotal };

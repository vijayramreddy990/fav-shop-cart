/* eslint-disable array-callback-return */
const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    let tempCart = cart.filter((item) => item.id === action.payload.id);
    if (tempCart.length < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  } else if (action.type === "REMOVE") {
    return cart.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "INCREASE") {
    let tempCart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
    });
    return tempCart;
  } else if (action.type === "DECREASE") {
    let tempCart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
    });
    return tempCart;
  }
  return cart;
};

export default Reducer;

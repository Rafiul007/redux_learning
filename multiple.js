const { createStore } = require("redux");
//product
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT = "GET_PRODUCT";
//product state
const initialProduct = {
  product: [],
  count: 0,
};
//produtc action
const addProduct = (product) => {
  return { type: ADD_PRODUCT, paylaod: product };
};
const getProduct = () => {
  return { type: GET_PRODUCT };
};
//product reducer
const ProductReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        count: state.count + 1,
        product: [...state.product, action.paylaod],
      };
    case GET_PRODUCT:
      return { ...state };
    default:
      state;
  }
};

//store
const store = createStore(ProductReducer);
store.subscribe(() => {
  console.log("Product state has changed!", store.getState());
});
store.dispatch(addProduct("Potato"));
store.dispatch(addProduct("Tomato"));
store.dispatch(addProduct("Banana"));
store.dispatch(getProduct())

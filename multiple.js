const { createStore, combineReducers } = require("redux");
//product ------------------------------------------!
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT = "GET_PRODUCT";

//cart..............................................!
const ADD_CART_ITEM = "ADD_CART_ITEM";
const GET_CART_ITEM = "GET_CART_ITEM";

//product state-------------------------------------!
const initialProduct = {
  product: [],
  count: 0,
};
//cart state .......................................!
const initialCart = {
  cart: [],
  totalCount: 0,
};
//produtc action------------------------------------!
const addProduct = (product) => {
  return { type: ADD_PRODUCT, paylaod: product };
};
const getProduct = () => {
  return { type: GET_PRODUCT };
};
//cart action .......................................!
const addToCartItem = (item) => {
  return { type: ADD_CART_ITEM, payload: item };
};
const getCartItem = () => {
  return { type: GET_CART_ITEM };
};
//product reducer-------------------------------------!
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
      return state;
  }
};
//cart reducer .....................................!
const CartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        totalCount: state.totalCount + 1,
      };
    case GET_CART_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

//combine reducer-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
const rootReducer = combineReducers({
    productR : ProductReducer,
    cartR: CartReducer
})

//store
// note: store at a time ektai reducer niye kaj korte pare.
//tai reducer gula combine kore ana lagbee.
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("Product state has changed!", store.getState());
});
store.dispatch(addProduct("Potato"));
store.dispatch(addProduct("Tomato"));
store.dispatch(addProduct("Banana"));
store.dispatch(getProduct());
store.dispatch(addToCartItem("Potato"));

//-.-.-.-.-.-.-next middleware-.-.-.-.-.-.-.-
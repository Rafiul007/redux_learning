const { createStore } = require("redux");

//defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
//state
const initialCounterState = {
  count: 0, //count state initialize korlam
};

//action = object:- type,payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const setCounterHundred = () => {
  return {
    type: "SET_100",
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value, //payload data receive korbe. value ta payload er maddhome ekhane receive kora hoise
  };
};

//creating reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case "SET_100":
      return { ...state, count: 100 };
    case INCREMENT_BY_VALUE:
        return { ...state, count: state.count + action.payload };
    default:
      state;
  }
};

//store: getState(), dispatch(), subscribe()
//creating store

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

//dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(setCounterHundred());
store.dispatch(decrementCounter());


store.dispatch(incrementCounterByValue(5))
store.dispatch(incrementCounterByValue(2));
store.dispatch(incrementCounterByValue(500));
const { createStore } = require("redux");

//state
const User = {
  user: [],
  count: 0,
};
//action
const addUser = (user) => {
  return { type: "ADD_USER", payload: user };
};
//reducer
const userReducer = (state = User, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };
    default:
      state;
  }
};
//store
const store= createStore(userReducer);
store.subscribe(()=>{
    console.log("The new State is : ",store.getState()); // ekhane view te ba output taa dekhanor code hoy
    // amra ekhane state ta just console e print kortisi
})
store.dispatch(addUser("Rafiul"));
store.dispatch(addUser("Riju")); // store ekta action dispatch korbee
store.dispatch(addUser("Fahim"));
store.dispatch(addUser("Riad"));

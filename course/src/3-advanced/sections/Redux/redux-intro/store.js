import { combineReducers, createStore } from "redux";
import accountReducer from "./features/account/accountSlice";
import {
  deposit,
  withdraw,
  requestLoan,
  payLoan,
} from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { createCustomer, updateName } from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(requestLoan(1000));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer("Diego Bezerra", "46.906.539-4"));
console.log(store.getState());
store.dispatch(updateName("Diego Bezerra Martins"));
console.log(store.getState());

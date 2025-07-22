import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store = createStore(rootReducer);

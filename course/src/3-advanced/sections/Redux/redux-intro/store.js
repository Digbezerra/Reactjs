import { combineReducers, createStore } from "redux";

const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WITHDRAW = "account/withdraw";
const ACCOUNT_REQUEST_LOAN = "account/requestLoan";
const ACCOUNT_PAY_LOAN = "account/payLoan";

const CUSTOMER_CREATE = "customer/create";
const CUSTOMER_UPDATE_NAME = "customer/updateName";

const LOAN_PURPOSE_PLACEHOLDER = "insert the loanPurpose";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case ACCOUNT_WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case ACCOUNT_REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case ACCOUNT_PAY_LOAN:
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case CUSTOMER_CREATE:
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case CUSTOMER_UPDATE_NAME:
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

//Account Action Creators
function deposit(amount) {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
}

function withdraw(amount) {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
}

function requestLoan(amount, purpose = LOAN_PURPOSE_PLACEHOLDER) {
  return {
    type: ACCOUNT_REQUEST_LOAN,
    payload: { amount, purpose },
  };
}

function payLoan() {
  return { type: ACCOUNT_PAY_LOAN };
}

//Customer action Creators
function createCustomer(fullName, nationalID) {
  return {
    type: CUSTOMER_CREATE,
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: CUSTOMER_UPDATE_NAME, payload: fullName };
}

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

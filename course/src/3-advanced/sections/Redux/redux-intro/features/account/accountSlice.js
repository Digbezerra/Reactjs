import { createSlice } from "@reduxjs/toolkit";

const ACCOUNT_DEPOSIT = "account/deposit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(currentLoanAmount, currentLoanPurpose) {
        return { payload: { currentLoanAmount, currentLoanPurpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.currentLoanAmount;
        state.loanPurpose = action.payload.currentLoanPurpose;
        state.balance += action.payload.currentLoanAmount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan, convertingCurrency } =
  accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: ACCOUNT_DEPOSIT, payload: amount };
  return async function (dispatch) {
    dispatch(convertingCurrency());
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: ACCOUNT_DEPOSIT, payload: converted });
  };
}

export default accountSlice.reducer;

// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case ACCOUNT_DEPOSIT:
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case ACCOUNT_WITHDRAW:
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     case ACCOUNT_REQUEST_LOAN:
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case ACCOUNT_PAY_LOAN:
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case IS_CONVERTING_CURRENCY:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// }

//action creators

// export function withdraw(amount) {
//   return { type: ACCOUNT_WITHDRAW, payload: amount };
// }

// export function requestLoan(amount, purpose = LOAN_PURPOSE_PLACEHOLDER) {
//   return {
//     type: ACCOUNT_REQUEST_LOAN,
//     payload: { amount, purpose },
//   };
// }

// export function payLoan() {
//   return { type: ACCOUNT_PAY_LOAN };
// }

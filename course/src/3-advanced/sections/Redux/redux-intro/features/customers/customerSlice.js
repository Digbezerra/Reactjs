const CUSTOMER_CREATE = "customer/create";
const CUSTOMER_UPDATE_NAME = "customer/updateName";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
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
        fullName: action.payload,
      };
    default:
      return state;
  }
}

//action creators
export function createCustomer(fullName, nationalID) {
  return {
    type: CUSTOMER_CREATE,
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: CUSTOMER_UPDATE_NAME, payload: fullName };
}

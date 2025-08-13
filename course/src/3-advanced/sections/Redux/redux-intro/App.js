import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import "./index.css";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName); //useSelector makes possible to select a state from redux
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;

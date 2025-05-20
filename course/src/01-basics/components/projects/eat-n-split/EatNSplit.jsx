import { FriendsList } from "./FriendsList";
import { SplitBill } from "./SplitBill";

import "./index.css";

export function EatNSplit() {
  return (
    <>
      <div className="container">
        <FriendsList />
        <SplitBill />
      </div>
    </>
  );
}

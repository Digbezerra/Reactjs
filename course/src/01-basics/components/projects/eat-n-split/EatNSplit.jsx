import { useState } from "react";

import { FriendsList } from "./FriendsList";
import { SplitBill } from "./SplitBill";

import "./index.css";

export function EatNSplit() {
  const [friends, setFriends] = useState([]);

  const onAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  return (
    <>
      <div className="container">
        <FriendsList friends={friends} onAddFriend={onAddFriend} />
        <SplitBill />
      </div>
    </>
  );
}

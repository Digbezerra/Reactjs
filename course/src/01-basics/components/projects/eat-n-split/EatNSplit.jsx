import { useState } from "react";

import { FriendsList } from "./FriendsList";
import { SplitBill } from "./SplitBill";

import "./index.css";

export function EatNSplit() {
  const [friends, setFriends] = useState([]);
  const [curSelected, setCurSelected] = useState(null);

  const onAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  const onUpdateFriend = (friend) => {
    const newFriendsArray = friends.map((item, index) => {
      return index === curSelected ? { ...item, debit: friend.debit } : item;
    });
    setFriends(newFriendsArray);
  };

  const handleCurSelected = (index) => {
    setCurSelected((curOpen) => (index === curOpen ? null : index));
  };

  return (
    <>
      <div className="container">
        <FriendsList
          friends={friends}
          onAddFriend={onAddFriend}
          handleCurSelected={handleCurSelected}
          curSelected={curSelected}
        />
        <SplitBill
          curSelected={curSelected}
          friends={friends}
          onUpdateFriend={onUpdateFriend}
        />
      </div>
    </>
  );
}

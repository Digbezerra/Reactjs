import { useState } from "react";
import { FriendsList } from "./FriendsList";
import { AddFriend } from "./AddFriend";
import { SplitBill } from "./SplitBill";

import "./index.css";
import { Button } from "./Button";

const friendsData = [
  {
    id: 142453,
    name: "Diego Bezerra",
    imgUrl: "https://i.pravatar.cc/150?img=3",
    balance: 0,
  },
  {
    id: 142454,
    name: "Renata Almeida",
    imgUrl: "https://i.pravatar.cc/150?img=46",
    balance: 0,
  },
  {
    id: 142455,
    name: "Pollyana Capellari",
    imgUrl: "https://i.pravatar.cc/150?img=24",
    balance: 0,
  },
  {
    id: 142456,
    name: "Tayná De Souza",
    imgUrl: "https://i.pravatar.cc/150?img=16",
    balance: 0,
  },
];

export function App() {
  const [friends, setFriends] = useState(friendsData);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [curSelected, setCurSelected] = useState(null);

  const onAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const onUpdateFriend = (friend) => {
    const newFriendsArray = friends.map((item, index) => {
      return index === curSelected
        ? { ...item, balance: friend.balance }
        : item;
    });
    setFriends(newFriendsArray);
  };

  const handleCurSelected = (index) => {
    setCurSelected((curOpen) => (index === curOpen ? null : index));
  };

  return (
    <>
      <div className="container">
        <div>
          <FriendsList
            friends={friends}
            onAddFriend={onAddFriend}
            handleCurSelected={handleCurSelected}
            curSelected={curSelected}
          />
          {showAddFriend ? <AddFriend onAddFriend={onAddFriend} /> : null}
          <Button action={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        <SplitBill
          curSelected={curSelected}
          friends={friends}
          onUpdateFriend={onUpdateFriend}
        />
      </div>
    </>
  );
}

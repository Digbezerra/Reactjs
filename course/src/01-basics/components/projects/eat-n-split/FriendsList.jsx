import { AddFriend } from "./AddFriend";
import { Friend } from "./Friend";

export function FriendsList() {
  const imgUrl = "https://i.pravatar.cc/150?img=15";
  const friendName = "Dunha Gomes";
  const billStatus = "Tu tá me devendo";

  return (
    <section className="friends-section">
      <ul className="friends-list">
        <Friend
          imgUrl={imgUrl}
          friendName={friendName}
          billStatus={billStatus}
        />
        <Friend
          imgUrl={imgUrl}
          friendName={friendName}
          billStatus={billStatus}
        />
        <Friend
          imgUrl={imgUrl}
          friendName={friendName}
          billStatus={billStatus}
        />
      </ul>
      <AddFriend />
    </section>
  );
}

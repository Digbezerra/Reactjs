import { AddFriend } from "./AddFriend";
import { Friend } from "./Friend";

export function FriendsList({ friends, onAddFriend }) {
  return (
    <section className="friends-section">
      <ul className="friends-list">
        {friends.map((item) => {
          return (
            <Friend
              imgUrl={item.imgUrl}
              name={item.name}
              debitValue={item.debitValue}
              key={item.name}
            />
          );
        })}
      </ul>
      <AddFriend onAddFriend={onAddFriend} />
    </section>
  );
}

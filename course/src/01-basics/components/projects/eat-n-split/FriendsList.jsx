import { AddFriend } from "./AddFriend";
import { Friend } from "./Friend";

export function FriendsList({
  friends,
  onAddFriend,
  handleCurSelected,
  curSelected,
}) {
  return (
    <section className="friends-section">
      <ul className="friends-list">
        {friends.map((item, index) => {
          return (
            <Friend
              friend={item}
              debitValue={item.debitValue}
              handleCurSelected={handleCurSelected}
              index={index}
              key={item.name}
              curSelected={curSelected}
            />
          );
        })}
      </ul>
      <AddFriend onAddFriend={onAddFriend} />
    </section>
  );
}

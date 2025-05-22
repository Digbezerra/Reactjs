import { Friend } from "./Friend";

//Selected feature was applied from index, I need to change to Id.
//but, was good to know how to develop an app index based, but I know that's a bad practice at all

export function FriendsList({ friends, handleCurSelected, curSelected }) {
  return (
    <section className="friends-section">
      <ul className="friends-list">
        {friends.map((item, index) => {
          return (
            <Friend
              friend={item}
              balanceValue={item.balanceValue}
              handleCurSelected={handleCurSelected}
              index={index}
              key={item.name}
              curSelected={curSelected}
            />
          );
        })}
      </ul>
    </section>
  );
}

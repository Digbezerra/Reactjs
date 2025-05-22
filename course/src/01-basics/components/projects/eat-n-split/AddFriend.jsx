import { useState } from "react";
import { Button } from "./Button";

export function AddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleAddFriend = () => {
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: friendName,
      imgUrl: `${imgUrl}?=${id}`,
      balance: 0,
    };
    setFriendName("");
    setImgUrl("");
    onAddFriend(newFriend);
  };

  return (
    <div className="add-friend">
      <div className="input-name">
        <span>😊 Friend Name</span>
        <input
          placeholder="friend name"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
      </div>
      <div className="input-image-url">
        <span>✔ Image URL</span>
        <input
          placeholder="image url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </div>
      {!friendName || !imgUrl ? null : (
        <Button action={handleAddFriend}>Add</Button>
      )}
    </div>
  );
}

export function AddFriend() {
  return (
    <div className="add-friend">
      <div className="input-name">
        <span>😊 Friend Name</span>
        <input placeholder="friend name" />
      </div>
      <div className="input-image-url">
        <span>✔ Image URL</span>
        <input placeholder="image url" />
      </div>
      <button>Add</button>
    </div>
  );
}

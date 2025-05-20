export function SplitBill() {
  return (
    <section className="bill-section">
      <h2>Split Bill With Friend</h2>
      <div>
        <span>💰 Bill Value</span>
        <input placeholder="Bill Value" />
      </div>
      <div>
        <span>🤡 Your Expense</span>
        <input placeholder="Your Expense" />
      </div>
      <div>
        <span>🐍 Friend Expense</span>
        <input placeholder="Friend Expense"></input>
      </div>
      <div>
        <span>🤔 Who's paying the bill?</span>
        <select className="select-payment">
          <option value="me">Me</option>
          <option value="friend">Friends Name</option>
          <option value="us">Us</option>
        </select>
      </div>
      <div>
        <button>Split Bill</button>
      </div>
    </section>
  );
}

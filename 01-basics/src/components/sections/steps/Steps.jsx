import "./index.css";

export function Steps() {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="number active">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
      </div>
      <p className="message">Hello</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button>Next</button>
      </div>
    </div>
  );
}

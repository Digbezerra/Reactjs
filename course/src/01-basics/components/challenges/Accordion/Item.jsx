export const Item = ({ faqs, index, onCurOpen, numCurOpen }) => {
  const open = numCurOpen === index;

  return (
    <div
      className={`item ${open ? "open" : ""}`}
      onClick={() => onCurOpen(index)}
    >
      <span className="number">{index + 1}</span>
      <p className="title">{faqs.title}</p>
      {open ? (
        <>
          <span className="icon">-</span>
          <div className="content-box">
            <p>{faqs.text}</p>
          </div>
        </>
      ) : (
        <span className="icon">+</span>
      )}
    </div>
  );
};

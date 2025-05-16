import { useState } from "react";

export const Item = ({ faqs, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggleOpen()}
    >
      <span className="number">{index + 1}</span>
      <p className="title">{faqs.title}</p>
      {isOpen ? (
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

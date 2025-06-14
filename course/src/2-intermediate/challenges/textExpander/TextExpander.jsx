import { useState } from "react";

export function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1c7ed6",
  expanded = false,
  className,
  children,
}) {
  const [isOpen, setIsOpen] = useState(expanded);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
  };

  const buttonStyle = {
    color: buttonColor,
    border: "none",
    cursor: "pointer",
    background: "none",
    display: "inline",
  };

  const collapsedText = children
    .split(" ")
    .slice(0, collapsedNumWords)
    .join(" ");

  return (
    <div className={className}>
      <p>{isOpen ? children : collapsedText + "..."}</p>
      <button onClick={handleOpenToggle} style={buttonStyle}>
        {isOpen ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

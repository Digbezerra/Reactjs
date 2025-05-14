import "./index.css";

import { useState } from "react";

const messages = [
  "Learn React ⚛",
  "Apply for jobs 👜",
  "Invest in new income 🤑",
];

export function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    step < 3 && setStep((s) => s + 1);
  };

  const handlePrevious = () => {
    step > 1 && setStep((s) => s - 1);
  };

  const handleIsOpen = () => {
    setIsOpen((is) => !is);
  };

  return (
    <>
      <button
        className="btn-close"
        onClick={() => {
          handleIsOpen();
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="content">
            <div className="numbers">
              <div className={`number ${step >= 1 ? "active" : ""}`}>1</div>
              <div className={`number ${step >= 2 ? "active" : ""}`}>2</div>
              <div className={`number ${step >= 3 ? "active" : ""}`}>3</div>
            </div>
            <p className="message">
              Step {step}: {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                onClick={() => {
                  handlePrevious();
                }}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  handleNext();
                }}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

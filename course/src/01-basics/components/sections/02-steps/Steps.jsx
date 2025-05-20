import { Message } from "./Message";
import { Button } from "./Button";

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
            <Message step={step}>{messages[step - 1]}</Message>
            <div className="buttons">
              <Button
                action={handlePrevious}
                bgColor={"#7950f2"}
                textColor={"#fff"}
              >
                👈 Previous
              </Button>
              <Button
                action={handleNext}
                bgColor={"#7950f2"}
                textColor={"#fff"}
              >
                Next 👉
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

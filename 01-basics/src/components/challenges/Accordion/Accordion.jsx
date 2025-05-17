import { useState } from "react";

import { Item } from "./Item";
import { faqs } from "./mock";

import "./index.css";

//How To use:
//import on src/index.js
//insert import declarations
//import { ProfileCard } from "./components/challenges/ProfileCard";
//import { userData } from "./components/challenges/mock";

export function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  const handleCurOpen = (index) => {
    setCurOpen(index);
  };

  return (
    <>
      <div className="accordion">
        {faqs.map((item, index) => {
          return (
            <Item
              numCurOpen={curOpen}
              index={index}
              faqs={item}
              key={item.title}
              onCurOpen={handleCurOpen}
            />
          );
        })}
      </div>
    </>
  );
}

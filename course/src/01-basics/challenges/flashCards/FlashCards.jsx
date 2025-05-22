import { useState } from "react";

import { Card } from "./Card";

import { questions } from "./mock";

import "./index.css";
//How To use:
//import on src/index.js
//insert import declarations
//import { FlashCards } from "./components/challenges/ProfileCard";

//cartoes com perguntas, ao clicar nos cartoes ele mostra a resposta e modifica a cor do background

//

export const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  const questionsData = questions;

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <>
      <div className="flashcards">
        {questionsData.map((item) => {
          return (
            <div
              onClick={() => {
                handleClick(item.id);
              }}
              className={item.id === selectedId ? "selected" : ""}
              key={item.id}
            >
              <Card
                questionsData={item}
                key={item.id}
                selected={item.id === selectedId ? true : false}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

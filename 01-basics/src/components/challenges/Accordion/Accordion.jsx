import { Item } from "./Item";
import { faqs } from "./mock";

import "./index.css";

//How To use:
//import on src/index.js
//insert import declarations
//import { ProfileCard } from "./components/challenges/ProfileCard";
//import { userData } from "./components/challenges/mock";

export function Accordion() {
  return (
    <>
      <div className="accordion">
        {faqs.map((item, index) => {
          return <Item index={index} faqs={item} key={item.title} />;
        })}
      </div>
    </>
  );
}

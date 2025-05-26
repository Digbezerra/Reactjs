import "./index.css";

import { TextExpander } from "./TextExpander";

export function App() {
  return (
    <>
      <TextExpander
        expandButtonText="abre"
        collapseButtonText="fecha"
        className="box"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        aliquam laudantium quas rem ipsa sint, beatae cupiditate soluta commodi
        quisquam blanditiis iure, sequi animi officiis. Numquam suscipit
        repellendus vero. Expedita.
      </TextExpander>
    </>
  );
}

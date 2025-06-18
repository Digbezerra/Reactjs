import { Options } from "./Options";

export function Question({ question, answer, dispatch }) {
  return (
    <>
      <h4>{question.question}</h4>
      <div className="options">
        <Options
          options={question.options}
          dispatch={dispatch}
          answer={answer}
          correctOption={question.correctOption}
        />
      </div>
    </>
  );
}

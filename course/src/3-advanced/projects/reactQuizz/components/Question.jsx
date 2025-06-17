import { Options } from "./QuestionOption";

export function Question({ question, dispatch, answer }) {
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
      {answer !== null && (
        <button onClick={() => dispatch({ type: "nextQuestion" })}>
          Proxima pergunta
        </button>
      )}
    </>
  );
}

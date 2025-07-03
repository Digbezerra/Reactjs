import { useQuiz } from "../context/QuizContext";

export function NextButton() {
  const { dispatch, answer, questions, index } = useQuiz();
  const questionsLength = questions.length;

  if (answer === null) return null;

  if (index < questionsLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === questionsLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finishedQuiz" })}
      >
        finish
      </button>
    );
  }
}

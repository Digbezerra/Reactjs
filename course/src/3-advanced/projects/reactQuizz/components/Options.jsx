import { useQuiz } from "../context/QuizContext";

export function Options() {
  const { answer, dispatch, questions, index } = useQuiz();
  const { options, correctOption } = questions.at(index);
  const hasAnswer = answer !== null;

  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswer ? (index === correctOption ? "correct" : "wrong") : ""
            }`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswer}
          >
            {option}
          </button>
        );
      })}
    </>
  );
}

/*Select an answer
  - The correct and the wrong answers are displayed
  - The points that we've got where updated
  - The next button was displayed

  a state needs to be created, and needs to store what question was selected
*/

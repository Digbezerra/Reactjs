import { useQuiz } from "../context/QuizContext";

export function Progress() {
  const { points, questions, index, answer, totalPoints } = useQuiz();
  const totalQuestions = questions.length;

  return (
    <>
      <header className="progress">
        <progress
          max={totalQuestions}
          value={index + Number(answer !== null)}
        />
        <p>
          Question <strong>{index + 1}</strong> / {totalQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {totalPoints} points
        </p>
      </header>
    </>
  );
}

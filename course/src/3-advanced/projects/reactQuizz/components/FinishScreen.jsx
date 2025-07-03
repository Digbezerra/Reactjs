import { useQuiz } from "../context/QuizContext";

export function FinishScreen() {
  const { questions, points, highScore, dispatch } = useQuiz();

  const totalPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );
  const percentage = (points / totalPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 51 && percentage < 80) emoji = "🥉";
  if (percentage <= 50) emoji = "💩";
  return (
    <>
      <p className="result">
        {emoji} You scored {points} out of {totalPoints} (
        {Math.ceil(percentage)}
        %)
      </p>
      <p className="highscore">(High Score: {highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Play Again
      </button>
    </>
  );
}

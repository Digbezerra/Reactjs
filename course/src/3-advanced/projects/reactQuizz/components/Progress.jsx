export function Progress({ points, questions, index, answer, totalPoints }) {
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

import { Options } from "../components/Options";
import { useQuiz } from "../context/QuizContext";

export function Question() {
  const { questions, index } = useQuiz();
  const { question } = questions.at(index);
  return (
    <>
      <h4>{question}</h4>
      <div className="options">
        <Options />
      </div>
    </>
  );
}

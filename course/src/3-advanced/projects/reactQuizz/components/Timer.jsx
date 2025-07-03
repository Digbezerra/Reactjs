import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

export function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  const minutos = Math.floor(secondsRemaining / 60);
  const segundos = secondsRemaining % 60;

  return (
    <div className="timer">
      ⏰ {minutos < 10 && "0"}
      {minutos}:{segundos < 10 && "0"}
      {segundos}
    </div>
  );
}

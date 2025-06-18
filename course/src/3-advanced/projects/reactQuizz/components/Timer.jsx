import { useEffect } from "react";

export function Timer({ dispatch, secondsRemaining }) {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  const minutos = Math.floor(secondsRemaining / 60);
  const segundos = secondsRemaining % 60;
  console.log(secondsRemaining % 60);
  return (
    <div className="timer">
      ⏰ {minutos < 10 && "0"}
      {minutos}:{segundos < 10 && "0"}
      {segundos}
    </div>
  );
}

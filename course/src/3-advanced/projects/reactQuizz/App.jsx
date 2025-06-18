import { useEffect, useReducer } from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import "./index.css";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";
import { StartScreen } from "./components/StartScreen";
import { Question } from "./components/Question";
import { NextButton } from "./components/NextButton";
import { Progress } from "./components/Progress";
import { FinishScreen } from "./components/FinishScreen";
import { Timer } from "./components/Timer";
import { Footer } from "./components/Footer";

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  // 'loading','error', 'ready','active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "dataLoading":
      return {
        ...state,
        status: "loading",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "finishedQuiz":
      return {
        ...state,
        status: "finished",
        highScore:
          state.highScore > state.points ? state.highScore : state.points,
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
        highScore: state.highScore,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
};

export function App() {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = "React Quiz";
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed", payload: err }));
  }, []);

  const questionsLength = questions.length;
  const totalPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen questionsLength={questionsLength} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              points={points}
              questions={questions}
              index={index}
              answer={answer}
              totalPoints={totalPoints}
            />
            <Question
              question={questions.at(index)}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                questionsLength={questionsLength}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            totalPoints={totalPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

import AppContext from "./AppContext";
import { QuizProvider } from "./context/QuizContext";

function AppProvider() {
  return (
    <>
      <QuizProvider>
        <AppContext />
      </QuizProvider>
    </>
  );
}

export default AppProvider;

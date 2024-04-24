import { QuizApp } from "./components/QuizApp";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <div>
        <QuizApp
          nameClass="quiz1"
          answere1="Math-Quiz"
          answere2="Bodybuilding-Quiz"
        ></QuizApp>
      </div>
      <div>
        <QuizApp
          nameClass="quiz2"
          answere1="Family-Quiz"
          answere2="Animal-Quiz"
        ></QuizApp>
      </div>
      <Footer nameApp={"Year"}></Footer>
    </>
  );
}

export default App;

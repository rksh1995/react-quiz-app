import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import Navbar from "./components/Navbar";
import HtmlQuiz from "./components/HtmlQuiz";
import CssQuiz from "./components/CssQuiz";
import QuizInstruction from "./components/QuizInstruction";
import QuizList from "./components/QuizList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/htmlQuiz" element={<HtmlQuiz />} />
          <Route path="/cssQuiz" element={<CssQuiz />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quizInstructions" element={<QuizInstruction/>} />
        <Route path="/quizList" element={<QuizList/>} />
      </Routes>
    </div>
  );
}

export default App;

import { NavLink ,Outlet} from "react-router-dom";

import QuizCard from "./QuizCard";
// import QuizList from "./QuizList";
// import QuizInstruction from "./QuizInstruction";

const Home = () => {
  const quizCard = [
    {
      title: "HTML",
      description: "40 Questions covering the basics of HTML",
      text: "Start Quiz",
    },
    {
      title: "CSS",
      description: "40 Questions covering the basics of CSS",
      text: "Start Quiz",
    },
    {
      title: "JAVASCRIPT",
      description: "40 Questions covering the basics of JAVASCRIPT",
      text: "Start Quiz",
    },
    {
      title: "REACT",
      description: "40 Questions covering the basics of REACT",
      text: "Start Quiz",
    },
    {
      title: "NODE JS",
      description: "40 Questions covering the basics of NODE JS",
      text: "Start Quiz",
    },
    {
      title: "JQUERY",
      description: "40 Questions covering the basics of JQUERY",
      text: "Start Quiz",
    },
  ];
  return (
    <div className="quiz-cards-container">
      {quizCard.map(({ title, description, text }, index) => (
        <QuizCard
          title={title}
          description={description}
          text={text}
          key={index}
        />
      ))}
      <NavLink to="/htmlQuiz">Html Quiz</NavLink>
      <NavLink to="/cssQuiz">Css Quiz</NavLink>
      <Outlet/>
      {/* <QuizList/> */}
      {/* <QuizInstruction/> */}
    </div>
  );
};
export default Home;

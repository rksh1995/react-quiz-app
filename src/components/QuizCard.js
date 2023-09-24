
import { useNavigate } from "react-router-dom";


const QuizCard = ({ title, description, text }) => {
  const navigate = useNavigate();

  return (
    <div className="Quiz-container">
      <h1 className="quiz-heading">{title}</h1>
      <p className="quiz-para">{description}</p>
      <button className="quiz-btn" onClick={() => navigate("/quizInstructions")}>
        {text}
      </button>
    </div>
  );
};

export default QuizCard;


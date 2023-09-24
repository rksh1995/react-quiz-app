import { useNavigate } from "react-router-dom";

const QuizInstruction = () => {
  const navigate = useNavigate();

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const listStyle = {
    textAlign: 'left',
    paddingLeft: '20px',
  };

  const listItemStyle = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    margin: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Quiz App Instructions</h2>
      <ol type="1" style={listStyle}>
        <li style={listItemStyle}>Each quiz contains 25-40 questions</li>
        <li style={listItemStyle}>You get 1 point for each correct answer</li>
        <li style={listItemStyle}>Every Question has four options</li>
        <li style={listItemStyle}>No negative marking is there</li>
        <li style={listItemStyle}>Your device camera should always be on during the quiz</li>
        <li style={listItemStyle}>Your internet speed must be 20 mbps</li>
      </ol>
      <button style={buttonStyle} onClick={() => navigate("/quizList")}>
        Start Quiz
      </button>
    </div>
  );
};

export default QuizInstruction;

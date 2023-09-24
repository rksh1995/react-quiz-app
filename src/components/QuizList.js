
// import { useNavigate } from "react-router-dom";


    // const navigate = useNavigate();

    const QuizList = () => {
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
          listStyleType: 'none',
          padding: '0',
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
            <h2 style={headingStyle}>Quiz List</h2>
            <ul style={listStyle}>
              <li style={listItemStyle}>HTML Quiz</li>
              <li style={listItemStyle}>CSS Quiz</li>
              <li style={listItemStyle}>JAVASCRIPT Quiz</li>
              <li style={listItemStyle}>REACT JS Quiz</li>
              <li style={listItemStyle}>BOOTSTRAP Quiz</li>
              <li style={listItemStyle}>JQUERY Quiz</li>
              <li style={listItemStyle}>NODE JS Quiz</li>
              <li style={listItemStyle}>SQL Quiz</li>
              <li style={listItemStyle}>PHP Quiz</li>
              <li style={listItemStyle}>PYTHON Quiz</li>
            </ul>
            <button style={buttonStyle}>Prev</button>
            <button style={buttonStyle}>Next</button>
          </div>
        );
      };
      
      export default QuizList;
      
    
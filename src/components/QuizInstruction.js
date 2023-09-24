
import { useNavigate } from "react-router-dom";
const QuizInstruction = ()=>{

    const navigate = useNavigate();
    return(
        <div>
            <h2>Quiz App Instructions</h2>
            <ol type="1">
                <li>Each quiz contains 25-40 questions</li>
                <li>You get 1 point for each correct answer</li>
                <li>Every Question have four option</li>
                <li>No negative marking are there</li>
                <li>Your device camera should always on during quiz</li>
                <li>Your internet speed must be 20 mbps</li>
                
            </ol>
            <button onClick={ () => navigate("/quizList")}>Star Quiz</button>
        </div>
    )
}
export default QuizInstruction;
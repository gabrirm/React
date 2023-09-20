import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const {points, totalPoints, dispatch, highscore} = useQuiz()
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored{" "}
        <strong>
          {points} out of {totalPoints}
        </strong>{" "}
        {`(${Math.ceil(percentage)}%)`}
      </p>
      <p className="highscore">Highscore: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;

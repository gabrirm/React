import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numQuestions, index, points, questions } = useQuiz();
  const totalPoints = questions.reduce(
    (acum, current) => acum + current.points,
    0
  );
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        <strong>
          {" "}
          Question {index + 1} / {numQuestions}{" "}
        </strong>{" "}
      </p>
      <p>
        <strong>
          Points: {points} / {totalPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;

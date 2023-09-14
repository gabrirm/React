function Progress({ index, numQuestions, points, totalPoints }) {
  return (
    <header className="progress">
        <progress max={numQuestions} value={index}/>
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

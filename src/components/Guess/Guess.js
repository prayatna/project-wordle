import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ wordObj, answer }) {
  function guessResult() {
    if (!wordObj) {
      return null;
    }

    return checkGuess(wordObj.guessWord, answer);
  }

  const correctAnswer = guessResult();
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={correctAnswer ? correctAnswer[index].letter : undefined}
          status={correctAnswer ? correctAnswer[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;

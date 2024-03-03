import React from "react";
import { range } from "../../utils";

function Guess({ wordObj }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className="cell">
          {wordObj ? wordObj.guessWord[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

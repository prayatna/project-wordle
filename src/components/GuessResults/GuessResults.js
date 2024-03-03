import React from "react";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((word) => {
        return (
          <p key={word.id} className="guess">
            {word.guessWord}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;

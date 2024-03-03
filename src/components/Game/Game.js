import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function updateGuessList(guessedWord) {
    const newGuessedWord = {
      id: crypto.randomUUID(),
      guessWord: guessedWord,
    };

    setGuessList([...guessList, newGuessedWord]);
  }

  return (
    <>
      Put a game here!
      <GuessResults guessList={guessList} />
      <GuessInput updateGuessList={updateGuessList} />
    </>
  );
}

export default Game;

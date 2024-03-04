import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinBanner from "../WinBanner/WinBanner";
import LoseBanner from "../LoseBanner/LoseBanner";

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });

  //win, inProgress, lose
  const [gameStatus, setGameStatus] = React.useState("inProgress");

  function updateGuessList(guessedWord) {
    const newGuessedWord = {
      id: crypto.randomUUID(),
      guessWord: guessedWord,
    };

    const nextGuessList = [...guessList, newGuessedWord];

    setGuessList(nextGuessList);

    if (guessedWord.toUpperCase() === answer) {
      setGameStatus("win");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    } else {
      setGameStatus("inProgress");
    }
  }

  function handleRestartGame() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuessList([]);
    setGameStatus("inProgress");
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput updateGuessList={updateGuessList} gameStatus={gameStatus} />
      {gameStatus === "win" && (
        <WinBanner
          numOfGuesses={guessList.length}
          handleRestartGame={handleRestartGame}
        />
      )}
      {gameStatus === "lose" && (
        <LoseBanner answer={answer} handleRestartGame={handleRestartGame} />
      )}
    </>
  );
}

export default Game;

import React from "react";

function GuessInput({ updateGuessList, gameStatus }) {
  const [guessWord, setGuessWord] = React.useState("");

  function submitGuessWord(event) {
    event.preventDefault();

    updateGuessList(guessWord);

    setGuessWord("");
  }

  return (
    <form onSubmit={submitGuessWord} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "inProgress"}
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="should be 5 letter word"
        value={guessWord}
        onChange={(event) => {
          const nextGuessWord = event.target.value.toUpperCase();
          setGuessWord(nextGuessWord);
        }}
      />
    </form>
  );
}

export default GuessInput;

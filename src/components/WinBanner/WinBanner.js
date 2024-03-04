import React from "react";
import Banner from "../Banner/Banner";

function WinBanner({ numOfGuesses, handleRestartGame }) {
  return (
    <Banner
      status={"happy"}
      action={handleRestartGame}
      actionText={"Play again!"}
    >
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WinBanner;

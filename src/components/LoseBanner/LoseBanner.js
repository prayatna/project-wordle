import React from "react";
import Banner from "../Banner/Banner";

function LoseBanner({ answer, handleRestartGame }) {
  return (
    <Banner
      status={"sad"}
      action={handleRestartGame}
      actionText={"Restart Game"}
    >
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    </Banner>
  );
}

export default LoseBanner;

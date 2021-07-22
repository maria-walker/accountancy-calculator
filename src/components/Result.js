import React from "react";

const math = require("mathjs");

const Result = ({ userInput }) => {
  const result = math.evaluate(userInput) || 0;

  const resultRounded = result ? result.toFixed(2) : 0;

  return Number.isNaN(result) ? (
    <div>
      <p className="resultPara"> Please enter a maths expression </p>
    </div>
  ) : (
    <div>
      <p>{resultRounded}</p>
    </div>
  );
};

export default Result;

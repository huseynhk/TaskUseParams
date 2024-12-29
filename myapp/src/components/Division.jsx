import React from "react";
import { useParams } from "react-router-dom";

const Division = () => {
  const { num1, num2 } = useParams();
  const result = parseInt(num1) / parseInt(num2);
  return (
    <>
      <div>
        <h1>
          Result of {num1} / {num2} = <span>{result}</span>
        </h1>
      </div>
    </>
  );
};

export default Division;

import React from "react";
import Result from "./Result";
import { useState } from "react";

const Input = () => {
  const [userInput, setUserInput] = useState("");
  const [maths, setMaths] = useState("");
  return (
    <div>
      <section className="numbers">
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += "*0.2";
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="VAT"
        >
          VAT from NET
        </button>
        <button
          className="VAT"
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += "*1.2";
              console.log(newMaths);
              return newMaths;
            });
          }}
        >
          GROSS from NET
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += "/1.2";
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="VAT"
        >
          NET from GROSS
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += "/6";
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="VAT"
        >
          VAT from GROSS
        </button>
        <button
          onClick={() => {
            setUserInput("");
            setMaths("");
          }}
          className="operator"
        >
          AC
        </button>
        <button className="operator">+/-</button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += ".";
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="operator"
        >
          .
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += "+";
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="operator"
        >
          +
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 7;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          7
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 8;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          8
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 9;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          9
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += "-";
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="operator"
        >
          -
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 4;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          4
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 5;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          5
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 6;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          6
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += "*";
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="operator"
        >
          *
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 1;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          1
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 2;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          2
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 3;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          3
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += "/";
              console.group(newMaths);
              return newMaths;
            });
          }}
          className="operator"
        >
          /
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += 0;
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="number"
        >
          0
        </button>
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += ".";
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="operator"
        >
          .
        </button>
        <button className="result">
          <Result userInput={userInput} />
        </button>
        <button
          onClick={() => {
            setUserInput(maths);
          }}
          className="operator"
        >
          =
        </button>
      </section>
    </div>
  );
};

export default Input;

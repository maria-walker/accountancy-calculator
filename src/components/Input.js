import React from "react";
import Result from "./Result";
import { useState } from "react";

const Input = () => {
  const [userInput, setUserInput] = useState("");
  const [maths, setMaths] = useState("");
  const [VAT, setVAT] = useState("0.20");
  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      <section className="instructions">
        <details style={{ textAlign: "left" }}>
          <summary>Instructions</summary>
          <ol>
            <li>
              Select required VAT rate from the drop-down list. If no VAT rate
              is selected, 20% will be used by default.
            </li>
            <li>
              For VAT calculations, enter the amount and click on the required
              VAT operation, then click <strong>=</strong> .
            </li>

            <li>
              For standard maths operations, enter a maths expression, then
              click <strong>=</strong> .
            </li>
            <li>
              Click AC after each completed operation, or when entered a number
              or a symbol by mistake.
            </li>
            <li>
              Result is rounded to 2 decimals, ready to be entered into
              accounting system.
            </li>
          </ol>
        </details>
        <select
          defaultValue="Select VAT rate"
          onChange={(event) => setVAT(event.currentTarget.value)}
        >
          <option>Select VAT rate</option>
          <option value="0.20">20% - Standard Rate</option>
          <option value="0.05">5% - Reduced Rate </option>
          <option value="0.125">
            12.5% - Reduced Rate for hospitality, effective from 1 Oct 21
          </option>
        </select>
      </section>

      <br />
      <section className="numbers">
        <button
          onClick={() => {
            setMaths((currMaths) => {
              let newMaths = currMaths;
              newMaths += `*${VAT}`;
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
              newMaths += `*(1+${VAT})`;
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
              newMaths += `/(1+${VAT})`;
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
              newMaths += `/(1/${VAT}+1)`;
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
        <button className="result">
          {" "}
          <p
            style={{
              fontSize: "0.65em",
              textAlign: "left",
              verticalAlign: "top",
            }}
          >
            {maths ? maths : "Your maths expression will appear here"}
          </p>{" "}
        </button>
        <button className="result">
          <p
            style={{
              fontSize: "0.65em",
              textAlign: "left",
              verticalAlign: "top",
            }}
          >
            {" "}
            Result:{" "}
          </p>{" "}
          <Result userInput={userInput} />
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
              newMaths += "-";
              console.log(newMaths);
              return newMaths;
            });
          }}
          className="operator"
        >
          +/-
        </button>
        <button
          style={{
            fontSize: "3.65em",
            backgroundColor: "#5bcaae",
          }}
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

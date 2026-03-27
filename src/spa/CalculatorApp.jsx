import { useState } from "react";
import CompButton from "./CompButton";

function Calculator() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Hiba");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  }

  return (
    <div>
      <h2>Calculator</h2>
      <input type="text" value={input} readOnly />

      <div>
        <CompButton value="1" onButtonClick={() => handleClick("1")} />
        <CompButton value="2" onButtonClick={() => handleClick("2")} />
        <CompButton value="3" onButtonClick={() => handleClick("3")} />
        <CompButton value="+" onButtonClick={() => handleClick("+")} />
      </div>

      <div>
        <CompButton value="4" onButtonClick={() => handleClick("4")} />
        <CompButton value="5" onButtonClick={() => handleClick("5")} />
        <CompButton value="6" onButtonClick={() => handleClick("6")} />
        <CompButton value="-" onButtonClick={() => handleClick("-")} />
      </div>

      <div>
        <CompButton value="7" onButtonClick={() => handleClick("7")} />
        <CompButton value="8" onButtonClick={() => handleClick("8")} />
        <CompButton value="9" onButtonClick={() => handleClick("9")} />
        <CompButton value="*" onButtonClick={() => handleClick("*")} />
      </div>

      <div>
        <CompButton value="0" onButtonClick={() => handleClick("0")} />
        <CompButton value="C" onButtonClick={() => handleClick("C")} />
        <CompButton value="=" onButtonClick={() => handleClick("=")} />
        <CompButton value="/" onButtonClick={() => handleClick("/")} />
      </div>
    </div>
  );
}

export default Calculator;
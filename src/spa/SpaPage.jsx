import { useState } from "react";
import CalculatorApp from "./CalculatorApp";
import TicTacToeApp from "./TicTacToeApp";

function SpaPage() {
  const [aktivApp, setAktivApp] = useState("calculator");

  return (
    <div style={{ padding: "20px" }}>
      <h1>SPA - React alkalmazások</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setAktivApp("calculator")}>
          Calculator
        </button>

        <button
          onClick={() => setAktivApp("tictactoe")}
          style={{ marginLeft: "10px" }}
        >
          Tic-Tac-Toe
        </button>
      </div>

      {aktivApp === "calculator" && <CalculatorApp />}
      {aktivApp === "tictactoe" && <TicTacToeApp />}
    </div>
  );
}

export default SpaPage;
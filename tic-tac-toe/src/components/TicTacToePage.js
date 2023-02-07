import React, { useState } from "react";
import Board from "./Board";
import styles from "./TicTacToePage.module.css";

// Check for a complete line vertically, horizontally, and diagonally.
// Each array contains the indicies of the boxes we want to check.
const lines = [
  // diagonal lines
  [0, 4, 8],
  [2, 4, 6],
];
[0, 3, 6].forEach((j) => {
  // horizontal lines
  let arr = [0, 1, 2].map((i) => i + j);
  lines.push(arr);
});
[0, 1, 2].forEach((j) => {
  // vertical lines
  let arr = [0, 3, 6].map((i) => i + j);
  lines.push(arr);
});

const getWinner = (boxes) => {
  for (let line of lines) {
    const [x, y, z] = line.map((i) => boxes[i]);
    if (x && x === y && y === z) {
      return x;
    }
  }
  return null;
};

const isGameOver = (boxes) => {
  return getWinner(boxes) != null;
};

const getMessage = (boxes, currentPlayer) => {
  const winner = getWinner(boxes);
  return winner ? winner + " wins!" : currentPlayer + "'s turn";
};

export default function TicTacToePage() {
  const [boxes, setBoxes] = useState(new Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const onBoxClick = (i) => {
    // if the box is already filled or the game is over, then return.
    if (boxes[i] || isGameOver(boxes)) {
      return;
    }

    // record the marked box
    boxes[i] = currentPlayer;
    setBoxes(boxes);

    let nextPlayer = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(nextPlayer);
  };

  return (
    <div className={styles.page}>
      <h1>Tic Tac Toe</h1>
      <div className={styles.message}>{getMessage(boxes, currentPlayer)}</div>
      <Board onClick={onBoxClick} boxes={boxes} />
      <button className={styles.button} onClick={() => console.log("Play again clicked")}>
        Play again
      </button>
    </div>
  );
}

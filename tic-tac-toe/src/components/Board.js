import React from "react";
import Box from "./Box";
import styles from "./Board.module.css";

export default function Board({ onClick, boxes }) {
  const aBox = (i) => {
    return <Box mark={boxes[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className={styles.board}>
      <div className={styles.board_row}>
        {aBox(0)}
        {aBox(1)}
        {aBox(2)}
      </div>
      <div className={styles.board_row}>
        {aBox(3)}
        {aBox(4)}
        {aBox(5)}
      </div>
      <div className={styles.board_row}>
        {aBox(6)}
        {aBox(7)}
        {aBox(8)}
      </div>
    </div>
  );
}

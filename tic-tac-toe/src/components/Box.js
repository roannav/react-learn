import React from "react";
import styles from "./Box.module.css";

export default function Box({ mark, onClick }) {
  return (
    <button className={styles.box} onClick={onClick}>
      {mark}
    </button>
  );
}

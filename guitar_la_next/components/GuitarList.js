import React from "react";
import Guitar from "./Guitar";
import styles from "../styles/Guitars.module.css";
const GuitarList = ({ guitars }) => {
  return (
    <div className={styles.items}>
      {guitars.map((guitar) => (
        <Guitar guitar={guitar} key={guitar.slug} />
      ))}
    </div>
  );
};

export default GuitarList;

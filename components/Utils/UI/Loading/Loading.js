import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.ring}>
      <span className={styles.span}></span>
    </div>
  );
};

export default Loading;

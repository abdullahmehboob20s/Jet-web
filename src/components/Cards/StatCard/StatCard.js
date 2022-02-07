import React from "react";
import styles from "./StatCard.module.css";
import useMediaQuery from "hooks/useMediaQuery";

const StatCard = ({ title, value }) => {
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div className={styles.card}>
      <h2
        className={`${
          isBellow600px ? "fs-28px" : "fs-34px"
        } blue uppercase mb-25px`}
      >
        {title}
      </h2>

      <div
        className={`${styles.value} uppercase stroke-title font-open-sans ${
          isBellow600px ? "fs-36px" : "fs-50px"
        } weight-9`}
      >
        {value}
      </div>
    </div>
  );
};

export default StatCard;

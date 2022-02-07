import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./TokenomicsCard.module.css";

function TokenomicsCard({ title, value, img }) {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className={styles.card}>
      <img src={img} className="mb-20px" alt="" />
      <h3
        className={`${
          isBellow1000px ? "fs-24px" : "fs-34px"
        } black opacity-0_6 text-center weight-800 mb-5px`}
      >
        {title}
      </h3>
      <h5
        className={`${
          isBellow1000px ? "fs-40px" : "fs-54px"
        } black opacity-0_8 text-center weight-8`}
      >
        {value}
      </h5>
    </div>
  );
}

export default TokenomicsCard;

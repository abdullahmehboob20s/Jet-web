import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./TeamCard.module.css";

function TeamCard({ name, desc, img }) {
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div className={`${styles.card} text-center`}>
      <img src={img} className="mb-20px" alt="" />
      <p
        className={`stroke-title ${
          isBellow500px ? "fs-36px" : "fs-48px"
        } weight-8 font-open-sans mb-5px`}
      >
        {name}
      </p>
      <p
        className={` ${
          isBellow500px ? "fs-16px" : "fs-18px"
        } weight-5 black opacity-0_6`}
      >
        {desc}
      </p>
    </div>
  );
}

export default TeamCard;

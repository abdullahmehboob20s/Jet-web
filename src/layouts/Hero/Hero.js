import React from "react";
import styles from "./Hero.module.css";
import { FaPlay } from "react-icons/fa";
import useMediaQuery from "hooks/useMediaQuery";

function Hero() {
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <div className={styles.hero}>
          <h1
            className={`${
              isBellow500px ? "fs-40px" : "fs-52px"
            } weight-8 black`}
            style={{ letterSpacing: "14.5px" }}
          >
            JETELEE
          </h1>

          <button className={`${styles.playButton} pointer`}>
            <FaPlay size={isBellow500px ? 35 : 45} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

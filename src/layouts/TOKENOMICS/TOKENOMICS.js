import TokenomicsCard from "components/Cards/TokenomicsCard/TokenomicsCard";
import React from "react";
import styles from "./TOKENOMICS.module.css";
import tokenomicsimg1 from "assets/images/tokenomics-img-1.png";
import tokenomicsimg2 from "assets/images/tokenomics-img-2.png";
import tokenomicsimg3 from "assets/images/tokenomics-img-3.png";
import { FaTelegramPlane } from "react-icons/fa";
import useMediaQuery from "hooks/useMediaQuery";

function TOKENOMICS() {
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div>
      <div className="container-wrapper py-100px">
        <h1 className="title text-center mb-50px">TOKENOMICS</h1>

        <div className={`${styles.cards} mb-70px`}>
          <TokenomicsCard title="SUPPLY" value="102" img={tokenomicsimg1} />
          <TokenomicsCard
            title="PROTOCOL FEE"
            value="102"
            img={tokenomicsimg2}
          />
          <TokenomicsCard title="ACTO LP" value="102" img={tokenomicsimg3} />
        </div>

        <a href="/" target="_blank" className={styles.joinTelegramButton}>
          <FaTelegramPlane size={isBellow500px ? 24 : 30} />{" "}
          <span
            className={`block ${
              isBellow500px ? "fs-20px" : "fs-26px"
            } weight-6`}
          >
            Join us on Telegram
          </span>
        </a>
      </div>
    </div>
  );
}

export default TOKENOMICS;

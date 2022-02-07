import StatCard from "components/Cards/StatCard/StatCard";
import React from "react";
import styles from "./Stats.module.css";

function Stats() {
  return (
    <div>
      <div className="container-wrapper py-100px">
        <div className={styles.stats}>
          <h1 className="title text-center uppercase mb-50px">STATS</h1>

          <div className={styles.cards}>
            <StatCard title="ROUNDS" value="102" />
            <StatCard title="BOUGHT" value="102" />
            <StatCard title="SOLO" value="102" />
            <StatCard title="MCAP" value="102" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

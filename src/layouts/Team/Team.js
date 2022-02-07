import React from "react";
import styles from "./Team.module.css";
import teamimg1 from "assets/images/team-img-1.png";
import teamimg2 from "assets/images/team-img-2.png";
import TeamCard from "components/Cards/TeamCard/TeamCard";

function Team() {
  return (
    <div>
      <div className="container-wrapper pt-0 py-100px ">
        <h1 className="title text-center mb-50px uppercase">Team</h1>

        <div className={styles.cards}>
          <TeamCard name="CHAD" desc="CEO of Jette" img={teamimg1} />
          <TeamCard
            name="JOHN"
            desc="The hero we need, but don't deserve"
            img={teamimg2}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;

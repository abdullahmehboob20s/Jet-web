import React from "react";
import styles from "./HowDoesItWork.module.css";
import character from "assets/images/how-does-it-work-img.png";
import useMediaQuery from "hooks/useMediaQuery";

function HowDoesItWork() {
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper py-100px">
        <h1 className="title text-center mb-50px">HOW DOES IT WORK</h1>
        <div className={styles.section}>
          <img src={character} className={styles.sectionLeft} alt="" />
          <div className={styles.sectionRight}>
            <p
              className={`font-open-sans weight-4 lh-1_5 black opacity-0_8 ${
                isBellow500px ? "fs-16px" : "fs-20px"
              } mb-35px`}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <p
              className={`font-open-sans weight-4 lh-1_5 black opacity-0_8 ${
                isBellow500px ? "fs-16px" : "fs-20px"
              } mb-35px`}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowDoesItWork;

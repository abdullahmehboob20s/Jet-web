import React from "react";
import styles from "./SocialIconButton.module.css";

function SocialIconButton({ icon, className, link = "/" }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${styles.button} ${className} pointer`}
    >
      {icon}
    </a>
  );
}

export default SocialIconButton;

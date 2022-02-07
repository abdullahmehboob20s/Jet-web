import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import SocialIconButton from "components/Buttons/SocialIconButton/SocialIconButton";
import useMediaQuery from "hooks/useMediaQuery";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <div className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <h1
              className={`${
                isBellow500px ? "fs-28px" : "fs-36px"
              } uppercase weight-4 black`}
            >
              JETLEE
            </h1>
          </div>
          <div className={styles.navbarRight}>
            <SocialIconButton
              icon={
                <FaTwitter color="#1DA1F2" size={isBellow500px ? 20 : 36} />
              }
            />
            <SocialIconButton
              icon={
                <FaTelegramPlane
                  color="#229ED9"
                  size={isBellow500px ? 20 : 36}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

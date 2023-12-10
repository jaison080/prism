import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Hero.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "../Navbar/Navbar";
import { LogInWithAnonAadhaar } from "anon-aadhaar-react";

function Hero() {
  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <div className={styles.hero__left__title}>PRISM</div>
          <div className={styles.hero__left__subtitle}>
            An inclusive platform for LGBTQ+ community leveraging Web3{" "}
          </div>

          <div className={styles.hero__left__buttons}>
            <ConnectButton />
            <LogInWithAnonAadhaar />
          </div>
        </div>
        <div className={styles.hero__right} data-aos="fade-up">
          <div className={styles.hero__right__image}>
            <Image src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

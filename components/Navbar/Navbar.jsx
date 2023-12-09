import React from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className={styles.navbar}>
        <div
          className={styles.navbar_heading}
          onClick={() => {
            router.push("/");
          }}
          style={{
            cursor: "pointer",
          }}
        >
          PRISM
        </div>
      </div>
    </>
  );
}

export default Navbar;

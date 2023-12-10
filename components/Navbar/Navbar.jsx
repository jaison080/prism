import React from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { useAnonAadhaar, LogInWithAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";

function Navbar() {
  const router = useRouter();
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            color: "white",
          }}
        >
          <div
            onClick={() => router.push("/blogs")}
            style={{
              cursor: "pointer",
            }}
          >
            Blogs
          </div>
          <div
            onClick={() => router.push("/housing")}
            style={{
              cursor: "pointer",
            }}
          >
            Housing
          </div>
          <div
            onClick={() => router.push("/jobs")}
            style={{
              cursor: "pointer",
            }}
          >
            Jobs
          </div>
		  <div
            onClick={() => router.push("/notifications")}
            style={{
              cursor: "pointer",
            }}
          >
            Notifications
          </div>
        </div>
        <div className={styles.navbar_login_btn}>
          {anonAadhaar.status === "logging-in" ? (
            "Logging IN"
          ) : (
            <LogInWithAnonAadhaar />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

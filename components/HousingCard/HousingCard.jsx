import React from "react";
import styles from "./HousingCard.module.css";

export default function HousingCard({ housing }) {
  return (
    <div className={styles.card} key={housing.id}>
      <img
        src={housing.image}
        width={300}
        height={200}
        alt=""
        style={{
          borderRadius: "10px",
        }}
      />
      <h2 className={styles.key}>{housing.type}</h2>
      <h2 className={styles.key}>₹{housing.cost}</h2>
      <h4 className={styles.value}>Address : {housing.address}</h4>
      <h4 className={styles.value}>Occupants : {housing.occupants}</h4>
      <h4 className={styles.value}>Rating : {housing.rating}/5</h4>
      <a href={housing.link} target="_blank" rel="noreferrer">
        <div className={styles.bookbtn}>Book Now</div>
      </a>
    </div>
  );
}

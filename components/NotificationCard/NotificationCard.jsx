import React from "react";
import bell from "../../assets/bell.png";
import Image from "next/image";

export default function NotificationCard({ notification }) {
  return (
    <>
      <div className="job_card">
        <div className="notification_card_company_logo_img">
          <Image src={bell} width={400} height={400} alt="" />
        </div>
        <div className="job_card_job_title">{notification?.title}</div>
        <div className="job_card_company_name">{notification?.message.split("$@")[0]}</div>
        <button
          className="job_card_save"
          onClick={() => {
            if (notification?.message.split("$@")[1]) window.open(`${window.location.origin}/jobs?id=${notification?.message.split("$@")[1]}`, "_blank");
          }}
        >
          More
        </button>
      </div>
    </>
  );
}

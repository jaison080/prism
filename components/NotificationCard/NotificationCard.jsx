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
        <div class="job_card_job_title">{notification?.title}</div>
        <div class="job_card_company_name">{notification?.message}</div>
        <button
          class="job_card_save"
          onClick={() => {
            if (notification.url) window.open(notification.url, "_blank");
          }}
        >
          More
        </button>
      </div>
    </>
  );
}

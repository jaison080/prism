import React, { useEffect } from "react";
import CustomTitle from "../../utils/CustomTitle";
import Navbar from "../../components/Navbar/Navbar";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ethers } from "ethers";

export default function JobsPage() {
  const [notifications, setNotifications] = React.useState([]);
  
  const fetchNotifications = async () => {
    if (!window?.ethereum) {
      alert("Please install metamask");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    if (!provider) {
      alert("Provider not found");
      return;
    }
    const signer = provider.getSigner();
    if (!signer) {
      alert("Signer not found");
      return;
    }
    const userAlice = await PushAPI.initialize(signer, {
      env: CONSTANTS.ENV.STAGING,
    });
    const inboxNotifications = await userAlice.notification.list("INBOX");
    console.log(inboxNotifications);
    setNotifications(inboxNotifications);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <CustomTitle title="Notifications" />
      <Navbar />
      <div className={"jobs__container"}>
        <div className={"jobs__heading"}>NOTIFICATIONS</div>
        <div className={"jobs__list"}>
          {notifications.map((notification) => {
            return <NotificationCard notification={notification} key={notification.sid}/>;
          })}
        </div>
      </div>
    </>
  );
}

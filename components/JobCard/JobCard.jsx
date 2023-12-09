import React from "react";
import JobDetailsModal from "../JobDetailsModal/JobDetailsModal";

export default function JobCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="job_card">
        <div className="job_card_company_logo_img">
          <img
            src="https://pbs.twimg.com/profile_images/1624229470562398209/ZK2SZVs4_400x400.jpg"
            alt=""
          />
        </div>
        <div class="job_card_job_title">Software Engineer</div>
        <div class="job_card_company_name">Hays</div>
        <div class="job_card_skills_container">
          <div class="job_card_skill">Photoshop</div>
          <div class="job_card_skill">Illustrator</div>
          <div class="job_card_skill">HTML</div>
        </div>
        <button class="job_card_apply">Apply</button>
        <button class="job_card_save" onClick={handleOpen}>
          View
        </button>
      </div>
      <JobDetailsModal open={open} handleClose={handleClose} />
    </>
  );
}